import { render, screen } from "@testing-library/react";
import React from "react";
import BannerViagem from "./index";
import userEvent from "@testing-library/user-event";


test('Deve renderizar o banner de viagem', () => {
    render(<BannerViagem/>)
    expect(screen.getByText('Passagens aéreas')).toBeInTheDocument();
})

test('Deve desativar o input da volta, quando o botão só ida está marcado', async () => {
    const user = userEvent.setup();
    
    const {container} = render(<BannerViagem/>)
    const botaoSoIda = screen.queryByText('Só ida');
    
    await user.click(botaoSoIda);

    const inputVolta = screen.getByTestId('input-data-volta');
    
    expect(inputVolta).toBeDisabled();
})

test('Deve sumir o input da volta, quando o botão multidestino está marcado', async () => {
    const user = userEvent.setup();
    const {container} = render(<BannerViagem/>)
    const inputVolta = container.querySelector('date_picker')
    const botaoSoVolta = screen.queryByText('Multidestino');

    await user.click(botaoSoVolta);

    expect(inputVolta).not.toBeInTheDocument();
})

test('Deve mostrar passageiros e número de quartos, quando o botão voo + hospedagem for marcado', async () => {
    const user= userEvent.setup();
    const {container} = render(<BannerViagem/>);
    const botaoVooHospedagem = screen.getByTestId('botao_voo_hospedagem');
    

    await user.click(botaoVooHospedagem);
    const numeroPessoas = container.querySelector('.numero_pessoas');
    const numeroQuartos = container.querySelector('.numero_quartos');
    expect(numeroPessoas).toBeInTheDocument();
    expect(numeroQuartos).toBeInTheDocument();

})

test('Deve mostrar menu passageiros ao clicarmos no input passageiros e classe', async () => {
    const user = userEvent.setup();
    const {container} = render(<BannerViagem/>);
    const inputPassageirosEClasse = screen.getByTestId('input_passageiros_e_classe');

    await user.click(inputPassageirosEClasse);

    const menuPassageirosClasse = container.querySelector('.menu_passageiros_classe');

    expect(menuPassageirosClasse).toBeInTheDocument();
})

test('Deve alterar numero de pessoas ao adicionar um valor ao numero de maiores e menores clicarmos em aplicar', async () => {
    const user = userEvent.setup();
    render(<BannerViagem/>);
    const inputPassageirosEClasse = screen.getByTestId('input_passageiros_e_classe');

    await user.click(inputPassageirosEClasse);

    const botaoAumentarMaiores = screen.getByTestId('botao_aumentar_maiores');
    const botaoAumentarMenores = screen.getByTestId('botao_aumentar_menores');

    for(let i = 0; i< 3; i++){
        await user.click(botaoAumentarMaiores);
        await user.click(botaoAumentarMenores);
    }
    

    const botaoAplicar = screen.getByTestId('botao_aplicar_passageiros_classe');
    await user.click(botaoAplicar);
    
    expect(inputPassageirosEClasse).toHaveValue("7");
})

test('Deve adicionar quarto e adicionar o numero de pessoas ao clicarmos em adicionar quarto e aplicar no menu quartos', async () => {
    const user = userEvent.setup();
     const {container} = render(<BannerViagem/>);
     const botaoVooHospedagem = screen.getByTestId('botao_voo_hospedagem');
     await user.click(botaoVooHospedagem);
     const inputQuartosPessoas = screen.getByTestId('input_numero_quartos_pessoas');
     await user.click(inputQuartosPessoas);
    const menuQuartosPessoas = screen.getByTestId('menu_quartos_pessoas');

     expect(menuQuartosPessoas).toBeInTheDocument();

    
     
    
     for(let i = 0; i<3; i++){
    const botoesMaiores = screen.getAllByTestId('botao_aumentar_maiores_menu_quartos');
    const botoesMenores = screen.getAllByTestId('botao_aumentar_menores_menu_quartos');
    const botaoAdicionarQuarto = container.querySelector('.botao_adicionar_quarto');

    const ultimoBotaoMaiores = botoesMaiores[botoesMaiores.length - 1];
    const ultimoBotaoMenores = botoesMenores[botoesMenores.length - 1]; 

    await user.click(botaoAdicionarQuarto);        // <- Clica aqui **depois** de pegar os botões
    await user.click(ultimoBotaoMaiores);
    await user.click(ultimoBotaoMenores);
}
    const botaoAplicar = screen.getByTestId('botao_aplicar_quartos_pessoas');

     await user.click(botaoAplicar);

     const numeroQuartos = container.querySelector('.numero_quartos');
     const numeroPessoas = container.querySelector('.numero_pessoas');
     expect(numeroQuartos.textContent).toBe("4");
     expect(numeroPessoas.textContent).toBe("7");
     

})


test('mostra o calendário quando clicamos no input da ida ou da volta', async () => {
    const user= userEvent.setup();
    const {container} = render(<BannerViagem/>);
    const inputDataOrigem = screen.getByTestId('input_origem_data');
    const inputDataVolta = screen.getByTestId('input_volta_data');
    await user.click(inputDataOrigem);
    
    const calendario = container.querySelector('.react-datepicker__month-container');
    expect(calendario).toBeInTheDocument();

    await user.click(inputDataVolta);
    const segundoCalendario = container.querySelector('.react-datepicker__month-container');
    expect(segundoCalendario).toBeInTheDocument(); 
})

test('acrescenta novo trecho quando numero de trechos menor que 4', async () => {
    const user = userEvent.setup();
    const {container} = render(<BannerViagem/>)
    const botaoMultiDestino = screen.queryByText('Multidestino');
    await user.click(botaoMultiDestino);
    const botaoAcrescentarNovoTrecho = container.querySelector('.paragrafo_novo_trecho');
    expect(botaoAcrescentarNovoTrecho).toBeInTheDocument();
    
    let containersTrechos = container.querySelectorAll('.container_card_banner_multi_destino');
    expect(containersTrechos.length).toBe(1);
    for(let i =0 ; i< 3; i++){
        await user.click(botaoAcrescentarNovoTrecho);
        containersTrechos= container.querySelectorAll('.container_card_banner_multi_destino');
        
        expect(containersTrechos.length).toBe(i + 2); 
        
    }
    const botaoAcrescentarNovoTrechoDisabled = container.querySelector('.paragrafo_novo_trecho_disabled');
    expect(botaoAcrescentarNovoTrechoDisabled).toBeInTheDocument();
    
    
})

test('acrescenta novo trechos até 4 e exclui depois até sobrar 2', async () => {
    const user = userEvent.setup();
    const {container} = render(<BannerViagem/>)
    const botaoMultiDestino = screen.queryByText('Multidestino');
    await user.click(botaoMultiDestino);
    const botaoAcrescentarNovoTrecho = container.querySelector('.paragrafo_novo_trecho');
    expect(botaoAcrescentarNovoTrecho).toBeInTheDocument();
    
    let containersTrechos = container.querySelectorAll('.container_card_banner_multi_destino');
    expect(containersTrechos.length).toBe(1);
    for(let i =0 ; i< 3; i++){
        await user.click(botaoAcrescentarNovoTrecho);
        containersTrechos= container.querySelectorAll('.container_card_banner_multi_destino');
        
        expect(containersTrechos.length).toBe(i + 2); 
        
    }
    
    for(let i = 0 ; i < 2; i++){
        const botaoExcluir = container.querySelector('.botao_excluir_trecho');
        await user.click(botaoExcluir);
        containersTrechos= container.querySelectorAll('.container_card_banner_multi_destino');
        expect(containersTrechos.length).toBe(4 - (i+1));
    }
    
    
})


test('mostra menu origem ao clicar ou digitar no campo origem', async () => {
    const user = userEvent.setup();
    const {container} = render(<BannerViagem/>)
    const inputOrigem = screen.getByTestId('input_origem');
    await user.click(inputOrigem);
    const menuOrigem = screen.getByTestId('sugestoes_origem');
    expect(menuOrigem).toBeInTheDocument();

    await user.type(inputOrigem, 'São Paulo');
    expect(menuOrigem).toBeInTheDocument;
})

test('mostra menu destino mais buscados ao clicar e destino buscado ao digitar no campo', async () => {
    const user = userEvent.setup();
    const {container} = render(<BannerViagem/>)
    const inputDestino = screen.getByTestId('input_destino');
    await user.click(inputDestino);
    const menuDestino = screen.getByTestId('sugestoes_destinos_mais_buscados');
    expect(menuDestino).toBeInTheDocument();

    await user.type(inputDestino, 'Rio de Janeiro');
    const menuDestinoProcurado = screen.getByTestId('sugestoes_destino');
    expect(menuDestinoProcurado).toBeInTheDocument();
})

/* test mostrar sugestoes origem e destino dos trechos no multidestino */