import { render, screen } from "@testing-library/react";
import React from "react";
import NavBar from './index.tsx';
import userEvent from "@testing-library/user-event";


test('renderiza o título SkyPass', () => {
    render(React.createElement(NavBar));
    expect(screen.getByText('SkyPass')).toBeInTheDocument();
})


test('renderiza todos os links quando minha conta é false', () => {
    render(React.createElement(NavBar,{minhaConta:false}));
    expect(screen.getByText('Anuncie sua propriedade')).toBeInTheDocument();
    expect(screen.getByText('Ajuda')).toBeInTheDocument();
})

test('não renderiza os links quando minha conta é true ', () => {
    render(React.createElement(NavBar,{minhaConta:true}));
    expect(screen.getByText('Ajuda')).not.toBeInTheDocument;
})

test('abre e fecha o menu ao clicar no icone do usuário', async () => {
  const user = userEvent.setup();
  const { container } = render(<NavBar autenticado={true} />);

  const botaoUsuario = container.querySelector('.container_imagens_menu');
  await user.click(botaoUsuario);

  expect(screen.queryByText('Olá,Luiz!')).toBeInTheDocument();

  await user.click(botaoUsuario);
  expect(screen.queryByText('Olá,Luiz!')).not.toBeInTheDocument();
});

test('mostra menu de usuário logado quando autenticado = true', async () => {
    const user = userEvent.setup();
    const {container} =  render(<NavBar autenticado ={true}/>)
    const botaoUsuario = container.querySelector('.container_imagens_menu');

    await user.click(botaoUsuario);

    expect(screen.getByText('Olá,Luiz!')).toBeInTheDocument();
})

test('mostra menu de usuário não logado quando autenticado = false', async () => {
    const user = userEvent.setup();
    const {container} = render(<NavBar autenticado={false}/>);
    const botaoUsuario = container.querySelector('.container_imagens_menu');
    await user.click(botaoUsuario);

    expect(screen.getByText('Iniciar sessão')).toBeInTheDocument();
})

test('renderiza itens do menu inferior quando minhaConta = false', () => {
    render(<NavBar minhaConta={false}/>)
    expect(screen.getByText('Hospedagens')).toBeInTheDocument()/
    expect(screen.getByText('Passagens')).toBeInTheDocument();
    expect((screen.queryByAltText('Hospedagens'))).toBeInTheDocument();
    expect((screen.queryByAltText('Passagens'))).toBeInTheDocument();
})

test('não renderiza itens do menu inferior quando minhaConta = true', () => {
    render(<NavBar minhaConta={true}/>)
    expect((screen.queryByText('Hospedagens'))).not.toBeInTheDocument();
    expect((screen.queryByText('Passagens'))).not.toBeInTheDocument();

    expect((screen.queryByAltText('Hospedagens'))).not.toBeInTheDocument();
    expect((screen.queryByAltText('Passagens'))).not.toBeInTheDocument();

})

test('renderiza todos os links do topo quando minhaConta é false', () => {
    render(<NavBar minhaConta = {false} />)
    const links = screen.getAllByRole('listitem');
    expect(links.length).toBe(5);
})

test('renderiza todos os links do topo quando minhaConta é true', () => {
    render(<NavBar minhaConta = {true} />)
    const links = screen.getAllByRole('listitem');
    expect(links.length).toBe(3);
})

test('divide o texto longo em duas linhas', () => {
    render(<NavBar minhaConta={false}/>)
    expect(screen.getByText(/Benefícios Passaporte/)).toBeInTheDocument();
})

test('menu do usuário começa fechado', () => {
    render(<NavBar autenticado={true}/>)
    expect(screen.queryByText('Olá,Luiz!')).not.toBeInTheDocument();
})