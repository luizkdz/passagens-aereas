import BannerViagem from '../banner-viagem';
import styles from './shop-voos.module.css';
import { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
export default function ShopVoos(){

    const [tempoRestante, setTempoRestante] = useState(10 * 60 * 60);
    const horas = Math.floor(tempoRestante / 3600);
    const minutos = Math.floor((tempoRestante % 3600) / 60);
    const seg = tempoRestante % 60;
    const filtros = ['Paradas', 'Bagagem', 'Preço','Horário','Companhias','Duração','Aeroportos de ida','Aeroportos de volta']
    const [filtroSelecionados, setFiltrosSelecionados] = useState<string[]>(["Paradas", "Bagagem", "Preço", "", "","","",""]);

    const [minPreco, setMinPreco] = useState(300);
    const [maxPreco, setMaxPreco] = useState(1766);
    const minGap = 50;

    const [horarioMinIda, setHorarioMinIda] = useState(0);
    const [horarioMaxIda, setHorarioMaxIda] = useState(1439);
    const [horarioMinVolta, setHorarioMinVolta] = useState(0);
    const [horarioMaxVolta, setHorarioMaxVolta] = useState(1439);
    const minGapHorario = 10;
    const formatarHorario = (minutos: number) => {
    const horas = Math.floor(minutos / 60);
    const mins = minutos % 60;
    return `${String(horas).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
  };


    const [duracaoMinimaIda, setDuracaoMinimaIda] = useState(60);
    const [duracaoMaximaIda, setDuracaoMaximaIda] = useState(75);
    const [duracaoMinimaVolta, setDuracaoMinimaVolta] = useState(60);
    const [duracaoMaximaVolta, setDuracaoMaximaVolta] = useState(75);
    
   const handleDuracaoMinimaVoltaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor <= horarioMaxVolta - minGapHorario) setDuracaoMinimaVolta(valor);
  };

  const handleDuracaoMaxVoltaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor <= horarioMaxVolta - minGapHorario) setDuracaoMaximaVolta(valor);
  };  
  const handleDuracaoMinIdaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor <= horarioMaxIda - minGapHorario) setDuracaoMinimaIda(valor);
  };

  const handleDuracaoMaxIdaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor <= horarioMaxIda - minGapHorario) setDuracaoMaximaIda(valor);
  };





    const handleHorarioMinVoltaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor <= horarioMaxVolta - minGapHorario) setHorarioMinVolta(valor);
  };

  const handleHorarioMaxVoltaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor <= horarioMaxVolta - minGapHorario) setHorarioMaxVolta(valor);
  };  
  const handleHorarioMinIdaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor <= horarioMaxIda - minGapHorario) setHorarioMinIda(valor);
  };

  const handleHorarioMaxIdaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor <= horarioMaxIda - minGapHorario) setHorarioMaxIda(valor);
  };




    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor <= maxPreco - minGap) setMinPreco(valor);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor >= minPreco + minGap) setMaxPreco(valor);
  };
    


    const handleFiltrosSelecionados = (index,item) => {
        const novosFiltros = [...filtroSelecionados];
        if(novosFiltros[index] === item){
            novosFiltros[index] = "";
        }
        else{
            novosFiltros[index] = item
        }

        setFiltrosSelecionados(novosFiltros);
    }


    const [opcaoEscolhida,setOpcaoEscolhida] = useState("preco_companhia");
    const meses = ['Outubro 2025', 'Novembro 2025', 'Dezembro 2025', 'Janeiro 2026','Fevereiro 2026', 'Março 2026', 'Abril 2026', 'Maio 2026','Junho 2026','Julho 2026','Agosto 2026', 'Setembro 2026']
    const precos = [443, 480, 520, 610, 590, 560, 470, 450, 490, 530, 500,500];
    const menorPreco = Math.min(...precos);
    const maiorPreco = Math.max(...precos);
  // 🔹 Define a cor de cada barra (verde pro menor, roxo pros demais)
  const cores = precos.map((preco) =>
    preco === menorPreco ? "#028574" : "#270570"
  );
   const data = {
    labels: meses,
    datasets: [
      {
        label: "Preço médio (R$)",
        data: precos,
        backgroundColor: cores,
        borderRadius: 8,
      },
    ],
  };

  const options = {
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      suggestedMin: menorPreco - 50,
      suggestedMax: maiorPreco + 50,
      ticks: {
        display: false,
      },
    },
  },
};

// 👇 Aqui você registra o plugin separadamente (não dentro do options)
const customLabels = {
  id: 'customLabels',
  afterDraw: (chart: any) => {
    const ctx = chart.ctx;
    const yScale = chart.scales.y;

    const yMenor = yScale.getPixelForValue(menorPreco);
    ctx.fillStyle = '#565a60';
    ctx.font = '14px sans-serif';

    ctx.fillText(`R$ ${menorPreco}`, 10, yMenor);

    const yMaior = yScale.getPixelForValue(maiorPreco);
    ctx.fillStyle = '#565a60';
    ctx.fillText(`R$ ${maiorPreco}`, 10, yMaior);
  },
};


const [mostrarModal,setMostrarModal] = useState(false);
const [mostrarMaisDetalhesModal, setMostrarMaisDetalhesModal] = useState(false);
    
    useEffect(() => {
    const intervalo = setInterval(() => {
      setTempoRestante((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalo); // limpa ao desmontar
  }, []);

    return (
        <div className={styles.secao_shop_voos}>
            <div className={styles.container_propaganda}>
                <div className={styles.card_propaganda}>
                    <div className={styles.container_imagem_paragrafo}>
                    <img src="/images/etiqueta-de-desconto.png" className={styles.imagem_propaganda}/>
                    <div className={styles.container_titulo_cupom}>
                    <h3 className={styles.titulo_oferta}>TODOS OS PRODUTOS COM ATÉ 10% OFF</h3>
                    <p className={styles.paragrafo_oferta}>Usando o cupom: SKYPASS10</p>
                    </div>
                    </div>
                    <div className={styles.titulo_relogio}>
                    <p className={styles.titulo_aproveite}>APROVEITE É SÓ HOJE!</p>
                    <div className={styles.container_relogio}>
        <div className={styles.container_horas}><p className={styles.marcacao_tempo}>{horas}</p>
        <p className={styles.tipo_relogio}>HORAS</p></div>:
      <div className={styles.container_minutos}><p className={styles.marcacao_tempo}>{minutos}</p>
        <p className={styles.tipo_relogio}>MINUTOS</p></div>:
    <div className={styles.container_segundos}><p className={styles.marcacao_tempo}>{seg}</p>
        <p className={styles.tipo_relogio}>SEGUNDOS</p>
    </div>
    </div>
                    </div>
                </div>
            </div>
            <div className={styles.secao_passagens_voos}>
            <div className={styles.secao_passagens_filtros_voos}>
                <BannerViagem shop={true} passagensAereas={true}/>
                {filtros.map((item,index) => {
                    return (
                        <div  className={styles.container_filtros}>
                    <div onClick={() => {handleFiltrosSelecionados(index,item)}} className={styles.container_texto_dropdown}>
                    <h5 className={styles.titulo_filtro}>{item}</h5>
                    <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    {filtroSelecionados[index] === item && filtroSelecionados[index] === "Paradas" ? <div>
                    <div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <p className={styles.nome_filtro}>Todas as paradas</p>
                    </div>
                    <p className={styles.nome_filtro}>912</p>

</div>
<div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <p className={styles.nome_filtro}>Direto</p>
                    </div>
                    <p className={styles.nome_filtro}>912</p>

</div><div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <p className={styles.nome_filtro}>1 parada</p>
                    </div>
                    <p className={styles.nome_filtro}>912</p>

</div>
        </div> : filtroSelecionados[index] === item && filtroSelecionados[index] === "Bagagem" ? <div>
                    <div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <p className={styles.nome_filtro}>Todas as opções</p>
                    </div>
                    <p className={styles.nome_filtro}>2409</p>

</div>
<div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <p className={styles.nome_filtro}>Bagagem de mão</p>
                    </div>
                    <p className={styles.nome_filtro}>1563</p>

</div><div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <p className={styles.nome_filtro}>Bagagem para despachar</p>
                    </div>
                    <p className={styles.nome_filtro}>846</p>

</div>
        </div> : filtroSelecionados[index] === "Preço" && filtroSelecionados[index] === "Preço" ? <div className={styles.card_preco}>
                    <div className={styles.container_moeda}>
                    <p>Moeda</p>R$<input type="radio"/>
                    </div>
                    <div className={styles.container}>
      

      <div className={styles.sliderContainer}>
        <div className={styles.track}></div>
        <div
          className={styles.range}
          style={{
            left: `${(minPreco / 2000) * 100}%`,
            right: `${100 - (maxPreco / 2000) * 100}%`,
          }}
        ></div>
      </div>

      <div className={styles.inputsRange}>
        <input
          type="range"
          min="0"
          max="2000"
          value={minPreco}
          onChange={handleMinChange}
          className={styles.thumb}
        />
        <p className={styles.texto}>
       R${minPreco}
      </p>
        <input
          type="range"
          min="0"
          max="2000"
          value={maxPreco}
          onChange={handleMaxChange}
          className={styles.thumb}
        />
        <p className={styles.texto}>
        R${maxPreco}
      </p>
      </div>
      
    </div>
        </div> : filtroSelecionados[index] === item && filtroSelecionados[index] === "Horário" ? <div className={styles.container_horario}>

    <div className={styles.container_horario_ida}>
      <div className={styles.container_imagem_voo}>
      <div className={styles.container_imagem_ida}>
      <img src="/images/aviao-ida.png" className={styles.imagem_voo_ida}/>
      <p>Ida</p>
      </div>
      <p className={styles.texto_voos}>Voos para Rio de Janeiro</p>
        </div>
      <div className={styles.sliderContainer}>
        <div className={styles.track}></div>
        
        <div
          className={styles.range}
          style={{
            left: `${(horarioMinIda / 1439) * 100}%`,
            right: `${100 - (horarioMaxIda / 1439) * 100}%`,
          }}
        ></div>
        
      </div>

      <div className={styles.inputsRange}>
        
        <input
          type="range"
          min="0"
          max="1439"
          value={horarioMinIda}
          onChange={handleHorarioMinIdaChange}
          step={10}
          className={styles.thumb}
        />
        <p className={styles.texto}>
        {formatarHorario(horarioMinIda)} hrs
      </p>
      <p className={styles.texto_data}>Sex. 5 dez. 2025</p>
        <input
          type="range"
          min="0"
          max="1439"
          value={horarioMaxIda}
          onChange={handleHorarioMaxIdaChange}
          step={10}
          className={styles.thumb}
        />
        <p className={styles.texto}>
        {formatarHorario(horarioMaxIda)} hrs
      </p>
      </div>
      
    </div>
    <div className={styles.container_horario_ida}>
      <div className={styles.container_imagem_voo}>
      <div className={styles.container_imagem_ida}>
      <img src="/images/aviao-volta.png" className={styles.imagem_voo_ida}/>
      <p>Volta</p>
      </div>
      <p className={styles.texto_voos}>Voos para São Paulo</p>
        </div>

      <div className={styles.sliderContainer}>
        <div className={styles.track}></div>
        <div
          className={styles.range}
          style={{
            left: `${(horarioMinVolta / 1439) * 100}%`,
            right: `${100 - (horarioMaxVolta / 1439) * 100}%`,
          }}
        ></div>
      </div>

      <div className={styles.inputsRange}>
        <input
          type="range"
          min="0"
          max="1439"
          value={horarioMinVolta}
          onChange={handleHorarioMinVoltaChange}
          className={styles.thumb}
          step={10}
        />
        
        <p className={styles.texto}>
        {formatarHorario(horarioMinVolta)} hrs
      </p>
      <p className={styles.texto_data}>Dom. 7 dez. 2025</p>
        <input
          type="range"
          min="0"
          max="1439"
          value={horarioMaxVolta}
          onChange={handleHorarioMaxVoltaChange}
          className={styles.thumb}
          step={10}
        />
        <p className={styles.texto}>
        {formatarHorario(horarioMaxVolta)} hrs
      </p>
      </div>
      
    </div>
    </div> : filtroSelecionados[index] === item && filtroSelecionados[index] === "Companhias" ? <div>
                    <div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.imagem_logo}/>
                    <p className={styles.nome_filtro}>Azul</p>
                    </div>
                    <p className={styles.nome_filtro}>400</p>

</div>
<div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <img src="https://toppng.com/uploads/preview/gol-linhas-aereas-inteligentes-logo-vector-115741168058p8w7rkk3v.png" className={styles.imagem_logo}/>
                    <p className={styles.nome_filtro}>Gol</p>
                    </div>
                    <p className={styles.nome_filtro}>205</p>

</div><div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <img src="https://i.pinimg.com/736x/0d/04/bb/0d04bb1980de2098c247543a2cfeb152.jpg" className={styles.imagem_logo}/>
                    <p className={styles.nome_filtro}>LATAM</p>
                    </div>
                    <p className={styles.nome_filtro}>961</p>

</div>
        </div> : filtroSelecionados[index] === item && filtroSelecionados[index] === "Duração" ? <div className={styles.container_horario}>

    <div className={styles.container_horario_ida}>
      <div className={styles.container_imagem_voo}>
      <div className={styles.container_imagem_ida}>
      <img src="/images/aviao-ida.png" className={styles.imagem_voo_ida}/>
      <p>Ida</p>
      </div>
      <p className={styles.texto_voos}>Voos para Rio de Janeiro</p>
        </div>
      <div className={styles.sliderContainer}>
        <div className={styles.track}></div>
        
        <div
          className={styles.range}
          style={{
            left: `${(duracaoMinimaIda / 1439) * 100}%`,
            right: `${100 - (horarioMaxIda / 1439) * 100}%`,
          }}
        ></div>
        
      </div>

      <div className={styles.inputsRange}>
        
        <input
          type="range"
          min="0"
          max="1439"
          value={horarioMinIda}
          onChange={handleHorarioMinIdaChange}
          step={10}
          className={styles.thumb}
        />
        <p className={styles.texto}>
        {formatarHorario(horarioMinIda)} hrs
      </p>
      
        <input
          type="range"
          min="0"
          max="1439"
          value={horarioMaxIda}
          onChange={handleHorarioMaxIdaChange}
          step={10}
          className={styles.thumb}
        />
        <p className={styles.texto}>
        {formatarHorario(horarioMaxIda)} hrs
      </p>
      </div>
      
    </div>
    <div className={styles.container_horario_ida}>
      <div className={styles.container_imagem_voo}>
      <div className={styles.container_imagem_ida}>
      <img src="/images/aviao-volta.png" className={styles.imagem_voo_ida}/>
      <p>Volta</p>
      </div>
      <p className={styles.texto_voos}>Voos para São Paulo</p>
        </div>

      <div className={styles.sliderContainer}>
        <div className={styles.track}></div>
        <div
          className={styles.range}
          style={{
            left: `${(horarioMinVolta / 1439) * 100}%`,
            right: `${100 - (horarioMaxVolta / 1439) * 100}%`,
          }}
        ></div>
      </div>

      <div className={styles.inputsRange}>
        <input
          type="range"
          min="0"
          max="1439"
          value={horarioMinVolta}
          onChange={handleHorarioMinVoltaChange}
          className={styles.thumb}
          step={10}
        />
        
        <p className={styles.texto}>
        {formatarHorario(horarioMinVolta)} hrs
      </p>
      
        <input
          type="range"
          min="0"
          max="1439"
          value={horarioMaxVolta}
          onChange={handleHorarioMaxVoltaChange}
          className={styles.thumb}
          step={10}
        />
        <p className={styles.texto}>
        {formatarHorario(horarioMaxVolta)} hrs
      </p>
      </div>
      
    </div>
    </div> : filtroSelecionados[index] === item && filtroSelecionados[index] === "Aeroportos de ida" ? <div>
                    <div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <p className={styles.nome_filtro}>Todos os aeroportos</p>
                    </div>
                    <p className={styles.nome_filtro}>1567</p>

</div>
<div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <p className={styles.nome_filtro}>Aeroporto Internacional Guarulhos</p>
                    </div>
                    <p className={styles.nome_filtro}>912</p>

</div>
<div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <p className={styles.nome_filtro}>Aeroporto Internacional Viracopos</p>
                    </div>
                    <p className={styles.nome_filtro}>912</p>

</div>
<div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <p className={styles.nome_filtro}>Aeroporto de Congonhas</p>
                    </div>
                    <p className={styles.nome_filtro}>906</p>

</div>
        </div> : filtroSelecionados[index] === item && filtroSelecionados[index] === "Aeroportos de volta" ? <div>
                    <div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <p className={styles.nome_filtro}>Todos os aeroportos</p>
                    </div>
                    <p className={styles.nome_filtro}>1567</p>

</div>
<div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <p className={styles.nome_filtro}>Aeroporto Internacional Guarulhos</p>
                    </div>
                    <p className={styles.nome_filtro}>912</p>

</div>
<div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <p className={styles.nome_filtro}>Aeroporto Internacional Viracopos</p>
                    </div>
                    <p className={styles.nome_filtro}>912</p>

</div>
<div className={styles.container_input_texto_quantidade}>
                    <div className={styles.container_input_texto}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <p className={styles.nome_filtro}>Aeroporto de Congonhas</p>
                    </div>
                    <p className={styles.nome_filtro}>906</p>

</div>
        </div> : ""}
                    
                                
                </div>
                
                    )
                })}
                 
            </div>
           <div className={styles.container_voos}>
                <div className={styles.card_voo_ida_e_volta_monte_seu_voo}>
                    <div className={styles.card_voo_ida}>
                        <img src="/images/validando-ticket-roxo.png" className={styles.imagem_ticket}/>
                        <p>Voos ida e volta</p>
                    </div>
                    <div className={styles.card_voo_ida}>
                        <img src="/images/validando-ticket-roxo.png" className={styles.imagem_ticket}/>
                        <p>Monte seu voo</p>
                    </div>
                    
                </div>
                <div className={styles.container_titulo_avaliacoes}>
                <div className={styles.card_preço_companhia_tendencia_de_preco}>
                    
                    <div onClick={() => {setOpcaoEscolhida("preco_companhia") }} className={opcaoEscolhida === "preco_companhia" ? styles.container_preco_companhia_select : styles.container_preco_companhia}>
                    <p>Preços por companhia aérea</p>
                    </div>
                    <div onClick={() => {setOpcaoEscolhida("preco_3_dias")}} className={opcaoEscolhida === "preco_3_dias" ? styles.container_preco_companhia_3_dias_select : styles.container_preco_companhia_3_dias}>
                    <p>Preços +/- 3 dias</p>
                    </div>
                    <div onClick={() => {setOpcaoEscolhida("tendencia_precos")}} className={opcaoEscolhida === "tendencia_precos" ? styles.container_tendencia_de_precos_select : styles.container_tendencia_de_precos}>
                    <p>Tendência de preços</p>
                    </div>
                </div>
               {opcaoEscolhida === "preco_companhia" ? <div className={styles.container_titulo}>
                <ul>
                    <li className={styles.titulo_companhias}>Companhias</li>
                    <li className={styles.titulo_companhias}>Direto</li>
                    <li className={styles.titulo_companhias}>Com paradas</li>
                </ul>
                <ul>
                    <div>
                    
                    <li className={styles.preco_passagem}><div className={styles.container_nome_companhia_imagem}><img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/> Azul </div><div className={styles.container_texto_nota}><p className={styles.texto_nota}>8.1</p> <span className={styles.span_avaliacao}>Muito bom</span></div></li>
                    
                    
                    </div>
                    <li className={styles.preco_passagem}>R$ 511</li>
                    
                    <li className={styles.preco_passagem}> </li>
                </ul>
                <ul>
                    <li className={styles.preco_passagem}><div className={styles.container_nome_companhia_imagem}><img src="https://i.pinimg.com/736x/0d/04/bb/0d04bb1980de2098c247543a2cfeb152.jpg" className={styles.icone_companhia}/> LATAM </div><div className={styles.container_texto_nota}><p className={styles.texto_nota}>8.1</p> <span className={styles.span_avaliacao}>Muito bom</span></div></li>
                    
                    <li className={styles.preco_passagem}>R$ 544</li>
                    <li className={styles.preco_passagem}>R$ 856</li>
                </ul>
                <ul>
                    <li className={styles.preco_passagem}><div className={styles.container_nome_companhia_imagem}><img src="https://toppng.com/uploads/preview/gol-linhas-aereas-inteligentes-logo-vector-115741168058p8w7rkk3v.png" className={styles.icone_companhia}/> Gol </div><div className={styles.container_texto_nota}><p className={styles.texto_nota}>8.1</p> <span className={styles.span_avaliacao}>Muito bom</span></div></li>
                    
                    <li className={styles.preco_passagem}>R$ 544</li>
                    <li className={styles.preco_passagem}> </li>
                </ul>
               </div> : opcaoEscolhida === "preco_3_dias" ? <div>
                <table className={styles.tabela_precos}>
  <thead>
    <tr>
      <th className={styles.titulo_coluna_tabela}><div className={styles.container_saida_retorno_tabela}><p className={styles.texto_saida_barra}>Saída</p><div className={styles.barra_divisora}></div><p className={styles.texto_retorno_barra}>Retorno</p></div></th>
      <th className={styles.titulo_coluna_tabela}><p className={styles.dia_semana_tabela}>Terça-Feira</p>
      <p className={styles.dia_mes_tabela}>13 de jan.</p></th>
      <th className={styles.titulo_coluna_tabela}><p className={styles.dia_semana_tabela}>Quarta-feira</p>
      <p className={styles.dia_mes_tabela}>13 de jan.</p></th>
      <th className={styles.titulo_coluna_tabela}><p className={styles.dia_semana_tabela}>Quinta-Feira</p>
      <p className={styles.dia_mes_tabela}>13 de jan.</p></th>
      <th className={styles.titulo_coluna_tabela}><p className={styles.dia_semana_tabela}>Sexta-Feira</p>
      <p className={styles.dia_mes_tabela}>13 de jan.</p></th>
      <th className={styles.titulo_coluna_tabela}><p className={styles.dia_semana_tabela}>Sábado</p>
      <p className={styles.dia_mes_tabela}>13 de jan.</p></th>
      <th className={styles.titulo_coluna_tabela}><p className={styles.dia_semana_tabela}>Domingo</p>
      <p className={styles.dia_mes_tabela}>13 de jan.</p></th>
      <th className={styles.titulo_coluna_tabela}><p className={styles.dia_semana_tabela}> Segunda-Feira</p>
      <p className={styles.dia_mes_tabela}>13 de jan.</p></th>
    </tr>
  </thead>
  <tbody>
    
    <tr><th className={styles.titulo_linha_tabela}><p className={styles.dia_semana_tabela}> Quinta-Feira</p>
      <p className={styles.dia_mes_tabela}>13 de jan.</p></th><td><p className={styles.preco_tabela}>R$ 491</p></td><td ><p className={styles.preco_mais_barato_tabela}>R$ 480</p></td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
    <tr><th className={styles.titulo_linha_tabela}><p className={styles.dia_semana_tabela}> Sexta-Feira</p>
      <p className={styles.dia_mes_tabela}>13 de jan.</p></th><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
    <tr><th className={styles.titulo_linha_tabela}><p className={styles.dia_semana_tabela}> Sábado</p>
      <p className={styles.dia_mes_tabela}>13 de jan.</p></th><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
    <tr><th className={styles.titulo_linha_tabela}><p className={styles.dia_semana_tabela}> Domingo</p>
      <p className={styles.dia_mes_tabela}>13 de jan.</p></th><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
    <tr><th className={styles.titulo_linha_tabela}><p className={styles.dia_semana_tabela}> Segunda-Feira</p>
      <p className={styles.dia_mes_tabela}>13 de jan.</p></th><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
    <tr><th className={styles.titulo_linha_tabela}><p className={styles.dia_semana_tabela}> Terça-Feira</p>
      <p className={styles.dia_mes_tabela}>13 de jan.</p></th><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
    <tr><th className={styles.titulo_linha_tabela}><p className={styles.dia_semana_tabela}> Quarta-feira</p>
      <p className={styles.dia_mes_tabela}>13 de jan.</p></th><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
  </tbody>
  
</table>
<div>
<p className={styles.descricao_tabela}>As previsões se baseiam em um histórico de buscas e foram criadas para fornecer informações adicionais na cotação de um voo. Use-as levando em consideração que podem não ser 100% compatíveis com os resultados que você obteve. Nosso compromisso é apresentar previsões cada vez mais precisas</p>
</div>
                </div> : <div>

<div className={styles.card_tendencia_de_precos}>
<div style={{padding:"20px",display:"flex",flexDirection:"column",backgroundColor:"#FFFFFF",borderBottomRightRadius:"6px",borderBottomLeftRadius:"6px",borderTop:"1px solid #d6d4d4"}}>
      <div style={{padding:"20px",display:"flex",alignItems:"center",justifyContent:"space-between",height:"200px"}}>
      <Bar data={data} options={options} plugins={[customLabels]}/>
    <div>
    <p className={styles.preco_grafico}>A partir de</p> 
    <p className={styles.preco_grafico}>BRL <span className={styles.menor_preco_grafico_span}>{menorPreco}</span></p>
    <p className={styles.texto_preco_baixo}>Este é o preço mais baixo para viajar<br/> para o seu Rio de Janeiro</p>
    </div>
    
    </div>
    <div className={styles.container_texto_preco_pessoas}>
<p className={styles.texto_preco_pessoas}>Os preços que mostramos são por pessoa, ida e volta, e têm como base o histórico de busca de outros usuários.Leve em consideração que os preços podem não estar atualizados</p>
</div>
    
</div>
</div>
</div>}

           </div>
           <div className={styles.container_alerta_botoes}>
           <div className={styles.container_botoes}>
            <div className={styles.container_botao}>
                <button className={styles.botao_recomendados}>
                    <p>Recomendados</p>
                <p>R$ 759</p>
                </button>
                <div className={styles.balao_botao}><p className={styles.texto_balao_botao}>São as melhores opções considerando o preço, duração, escalas e bagagens incluídas</p></div>
            </div>
            <div className={styles.container_botao}>
                <button className={styles.botao_recomendados_nao_selecionado}>
                    <p>Mais baratos</p>
                <p>R$ 759</p>
                </button>
                <div className={styles.balao_botao_mais_baratos}><p className={styles.texto_balao_botao}>São as opções com melhor preço</p></div>
            </div>
            <div className={styles.container_botao}>
                <button className={styles.botao_recomendados_nao_selecionado}>
                    <p>Recomendados</p>
                <p>R$ 759</p>
                </button>
                <div className={styles.balao_botao_recomendados}><p className={styles.texto_balao_botao}>São as opções que consideram a duração e o menor número de escalas</p></div>
            </div>
           </div>
           <div className={styles.botao}>
                <button className={styles.botao_alerta}>
                    <div className={styles.container_imagem_alerta_texto}>
                    <img src="/images/sino.png" className={styles.imagem_sino_alerta}/>
                    <p>Criar alerta de preço</p>
                    </div>
                
                </button>
            </div>
           </div>
           <div className={styles.container_voos_preco}>
           <div className={styles.container_card_voos}>
           <div className={styles.card_voos}>
            
            <div className={styles.header}>
                <div className={styles.header_ida}>
                    <div className={styles.container_imagem_titulo}>
                    <img src="/images/aviao-ida.png" className={styles.imagem_aviao_ida}/>
                    <p className={styles.titulo_ida}>IDA</p>
                    </div>
                    <p className={styles.descricao_data}>Sex. 5 dez 2025</p>
                </div>
                <div className={styles.header_local_ida}>
                    <p>CGH</p>
                    <p className={styles.nome_cidade_bagagem}>São Paulo</p>
                </div>
                <div className={styles.header_local_volta}>
                    <p>GIG</p>
                    <p className={styles.nome_cidade_bagagem}>Rio de Janeiro</p>
                </div>
                <div className={styles.header_bagagem}>
                    <p></p>
                    <p className={styles.nome_cidade_bagagem}>Bagagem</p>
                </div>
                
            </div>
            <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p className={styles.paragrafo_horario}>07:55</p>
                    <p className={styles.paragrafo_direto}>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p className={styles.paragrafo_horario}>09:00</p>
                    <p className={styles.paragrafo_duracao}>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div onClick={() => {setMostrarModal(true)}}className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    
                    </div>
                    {mostrarModal && <div className={styles.overlay}>
                      <div className={styles.modal}>
                        <div className={styles.container_botao_fechar}>
                          <img onClick={() => {setMostrarModal(false)}} src="/images/x-preto.png" className={styles.imagem_botao_fechar}/>
                        </div>
                        <div className={styles.card_modal}>
                          
                          <div className={styles.container_companhia_numero_voo_classe}>
                          <div className={styles.container_imagem_companhia}>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                          <div className={styles.nome_companhia_notas}>
                          <p>Azul</p>
                          <div className={styles.container_nota_avaliacao}>
                          <p className={styles.nota_numero}>8.1</p><span className={styles.span_nota}>Muito bom</span>
                          </div>
                          </div>
                          </div>
                          <div className={styles.container_texto_numero_voo_classe}>
                            <p className={styles.texto_numero_voo_classe}>Voo Nº: AD2797</p>
                            <p className={styles.texto_numero_voo_classe}>Classe: Econômica</p>
                            </div>
                          </div>
                          <div className={styles.container_horario_voo_chegada}>
                            <div className={styles.texto_horario_voo}>
                              <p className={styles.texto_dia}>Sex. 16 Jan.</p>
                              <p className={styles.texto_horario}>06:00</p>
                              <p className={styles.texto_codigo_aeroporto}>VCP</p>
                              <p className={styles.texto_cidade}>São Paulo</p>
                              <p className={styles.texto_aeroporto}>Aeroporto Internacional Viracopos</p>
                            </div>
                            <div className={styles.texto_horario_voo}>
                              <p className={styles.texto_duracao}>- Duração -</p>
                              <p className={styles.texto_hora_duracao}>1h 5m</p>
                            </div>
                            <div className={styles.texto_horario_voo}>
                              <p className={styles.texto_dia}>Sex. 16 Jan.</p>
                              <p className={styles.texto_horario}>07:05</p>
                              <p className={styles.texto_codigo_aeroporto}>SDU</p>
                              <p className={styles.texto_cidade}>Rio de Janeiro</p>
                              <p className={styles.texto_aeroporto}>Aeroporto Santos Dumont</p>
                            </div>
                          </div>
                          {mostrarMaisDetalhesModal && (
                            <div className={styles.container_mostrar_mais_detalhes_modal}>
                              <p>Voo flexível</p>
                              <div className={styles.container_texto_cancelamento_alteracoes}>
                              <div className={styles.container_icone_cancelamento_texto}>
                                <img src="/images/x-preto.png" className={styles.icone_cancelamento}/>
                                <p>Não permite cancelamento</p>
                              </div>
                              <div className={styles.container_icone_cancelamento_texto}>
                                <img src="/images/verificado-verde.png" className={styles.icone_cancelamento}/>
                                <p>Permite alterações a partir de R$ 1.050</p>
                              </div>
                              <p className={styles.texto_podera_revisar_detalhes}>Você poderá revisar mais detalhes sobre alterações e cancelamentos no passo seguinte</p>
                            </div>
                            </div>
                          )}
                          <div className={styles.container_mais_detalhes}>
                            <button onClick={() => {setMostrarMaisDetalhesModal(!mostrarMaisDetalhesModal)}} className={styles.botao_mais_detalhes}>Mais detalhes<img src="/images/drop-down.png" className={styles.icone_drop_down} /></button>
                          </div>
                          </div>
                          <div className={styles.container_duracao_modal}>
                            <p>Duração: <span className={styles.duracao_hora_modal}>1h 5m</span></p>
                          </div>
                          <div className={styles.container_horario_local_cada_cidade}>
                            <p className={styles.texto_horario_hora_local}>Horários em hora local de cada cidade</p>

                          </div>
                          <div className={styles.card_bagagem_modal}>
                            <div className={styles.container_texto_bagagem_modal}>
                            <p className={styles.titulo_bagagem}>Bagagem</p>
                            </div>
                            <div className={styles.container_bagagem_modal}>
                              <div className={styles.container_imagem_bagagem_modal_texto}>
                                <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                                <div className={styles.container_texto_inclui_descricao}>
                                  <p className={styles.texto_inclui}>Inclui uma mochila ou bolsa</p>
                                  <p className={styles.texto_inclui_descricao}>Deve caber embaixo do assento dianterio</p>
                                </div>
                              </div>
                              <div className={styles.container_imagem_bagagem_modal_texto}>
                                <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                                <div className={styles.container_texto_inclui_descricao}>
                                  <p className={styles.texto_inclui}>Inclui bagagem de mão</p>
                                  <p className={styles.texto_inclui_descricao}>Deve caber no compartimento superior do avião</p>
                                </div>
                              </div>
                              <div className={styles.container_imagem_bagagem_modal_texto}>
                                <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                                <div className={styles.container_texto_inclui_descricao}>
                                  <p className={styles.texto_inclui}>Não inclui bagagem para despachar</p>
                                  <p className={styles.texto_inclui_descricao}>Você poderá comprar malas online por um preço exclusivo</p>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                  
                    </div>}
                    </div>
                </div>
                </div>
                <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
           </div>
           <div className={styles.card_voos}>
            <div className={styles.header}>
                <div className={styles.header_ida}>
                    <div className={styles.container_imagem_titulo}>
                    <img src="/images/aviao-ida.png" className={styles.imagem_aviao_ida}/>
                    <p className={styles.titulo_ida}>VOLTA</p>
                    </div>
                    <p className={styles.descricao_data}>Sex. 5 dez 2025</p>
                </div>
                <div className={styles.header_local_ida}>
                    <p>CGH</p>
                    <p className={styles.nome_cidade_bagagem}>São Paulo</p>
                </div>
                <div className={styles.header_local_volta}>
                    <p>GIG</p>
                    <p className={styles.nome_cidade_bagagem}>Rio de Janeiro</p>
                </div>
                <div className={styles.header_bagagem}>
                    <p></p>
                    <p className={styles.nome_cidade_bagagem}>Bagagem</p>
                </div>
                
            </div>
            <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
           </div>
           </div>
           <div className={styles.container_preco}>
            
            <div className={styles.container_descricao_preco}>
            <p className={styles.descricao_preco}>Preço por adulto</p>
            </div>
            <p className={styles.preco}>R$ <span className={styles.span_preco}>634</span></p>
            <div className={styles.container_numero_adultos_preco}>
            <p className={styles.numero_adultos}>1 adulto</p>
            <p className={styles.numero_preco}>R$ 634</p>
            </div>
            <div className={styles.container_texto_impostos_preco}>
            <p className={styles.texto_impostos}>Impostos, taxas e encargos</p>
            <p className={styles.numero_preco}>R$ 158</p>
            </div>
            <div className={styles.container_preco_final_botoes}>
            <div className={styles.container_preco_final}>
            <p>Preço final</p>
            <p>R$ 792</p>
            </div>
            <div className={styles.container_botoes_coracao_comprar}>
            <button className={styles.botao_coracao}><img src="/images/coracao.png" className={styles.imagem_coracao} /></button>
            <button className={styles.botao_comprar}>Comprar</button>
            </div>
            </div>
            <div className={styles.container_passaporte_pontos}>
                        <img src="/images/passaporte-pontos.png" className={styles.imagem_passaporte}/>
                        <div className={styles.container_texto_passaporte_pontos}>
                        <p className={styles.texto_passaporte}>Passaporte Skypass</p>
                        <p className={styles.texto_pontos}>Você acumula <strong>5 pontos</strong></p>
                        </div>
                        
                        </div>
           </div>
           </div>
           <div className={styles.card_inteligencia_artificial}>
            <div className={styles.container_imagem_estrela_sugestoes}>
            <img src="/images/estrelas-de-natal.png" className={styles.estrela_de_natal}/>
            <h5 className={styles.titulo_sugestoes}>Sugestões da nossa inteligência artificial baseada na sua busca</h5>
            </div>
            <p className={styles.dica_sugestao}>Para sua viagem de São Paulo ao Rio, considere levar bagagem de mão, mas se precisar de mais espaço, a bagagem despachada é uma boa opção.</p>
            </div>
            <div className={styles.container_voos_preco}>
           <div className={styles.container_card_voos}>
           <div className={styles.card_voos}>
            <div className={styles.container_header_patrocionio}>
              <div className={styles.container_imagem_patrocinio}>
                <img src="https://toppng.com/uploads/preview/gol-linhas-aereas-inteligentes-logo-vector-115741168058p8w7rkk3v.png" className={styles.icone_companhia}/>
                <p>Patrocinado</p>
              </div>
            <div className={styles.header}>
                
                <div className={styles.header_ida}>
                    <div className={styles.container_imagem_titulo}>
                    <img src="/images/aviao-ida.png" className={styles.imagem_aviao_ida}/>
                    <p className={styles.titulo_ida}>IDA</p>
                    </div>
                    <p className={styles.descricao_data}>Sex. 5 dez 2025</p>
                </div>
                <div className={styles.header_local_ida}>
                    <p>CGH</p>
                    <p className={styles.nome_cidade_bagagem}>São Paulo</p>
                </div>
                <div className={styles.header_local_volta}>
                    <p>GIG</p>
                    <p className={styles.nome_cidade_bagagem}>Rio de Janeiro</p>
                </div>
                <div className={styles.header_bagagem}>
                    <p></p>
                    <p className={styles.nome_cidade_bagagem}>Bagagem</p>
                </div>
                
            </div>
            </div>
            <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
           </div>
           <div className={styles.card_voos}>
            <div className={styles.header}>
                <div className={styles.header_ida}>
                    <div className={styles.container_imagem_titulo}>
                    <img src="/images/aviao-ida.png" className={styles.imagem_aviao_ida}/>
                    <p className={styles.titulo_ida}>VOLTA</p>
                    </div>
                    <p className={styles.descricao_data}>Sex. 5 dez 2025</p>
                </div>
                <div className={styles.header_local_ida}>
                    <p>CGH</p>
                    <p className={styles.nome_cidade_bagagem}>São Paulo</p>
                </div>
                <div className={styles.header_local_volta}>
                    <p>GIG</p>
                    <p className={styles.nome_cidade_bagagem}>Rio de Janeiro</p>
                </div>
                <div className={styles.header_bagagem}>
                    <p></p>
                    <p className={styles.nome_cidade_bagagem}>Bagagem</p>
                </div>
                
            </div>
            <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
           </div>
           </div>
           <div className={styles.container_preco}>
            
            <div className={styles.container_descricao_preco}>
            <p className={styles.descricao_preco}>Preço por adulto</p>
            </div>
            <p className={styles.preco}>R$ <span className={styles.span_preco}>634</span></p>
            <div className={styles.container_numero_adultos_preco}>
            <p className={styles.numero_adultos}>1 adulto</p>
            <p className={styles.numero_preco}>R$ 634</p>
            </div>
            <div className={styles.container_texto_impostos_preco}>
            <p className={styles.texto_impostos}>Impostos, taxas e encargos</p>
            <p className={styles.numero_preco}>R$ 158</p>
            </div>
            <div className={styles.container_preco_final_botoes}>
            <div className={styles.container_preco_final}>
            <p>Preço final</p>
            <p>R$ 792</p>
            </div>
            <div className={styles.container_botoes_coracao_comprar}>
            <button className={styles.botao_coracao}><img src="/images/coracao.png" className={styles.imagem_coracao} /></button>
            <button className={styles.botao_comprar}>Comprar</button>
            </div>
            </div>
           </div>
           </div>
           <div className={styles.card_voos_mais_baratos}>
            <div className={styles.container_imagem_calendario_texto}>
              <img src="/images/calendario.png" className={styles.icone_calendario}/>
              <p>Buscando voos mais baratos? Confira opções para datas mais próximas</p>
            </div>
            <div className={styles.container_card_noites}>
            <div className={styles.card_noites}>
              <div className={styles.container_noites}>
              <p>2 noites</p>
              </div>
              <div className={styles.container_datas}>
              <div className={styles.container_ida}>
              <p className={styles.dia_semana}>sábado</p>
              <p>17 jan</p>
              </div>
              <div className={styles.container_volta}>
              <p className={styles.dia_semana}>segunda-feira</p>
              <p>19 jan</p>
              </div>
              </div>
              <div className={styles.container_preco_card_noite}>
              <p className={styles.preco_card_noite}>R$ <span className={styles.span_bold_preco}>440</span></p>
              </div>
            </div>
            <div className={styles.card_noites}>
              <div className={styles.container_noites}>
              <p>2 noites</p>
              </div>
              <div className={styles.container_datas}>
              <div className={styles.container_ida}>
              <p className={styles.dia_semana}>sábado</p>
              <p>17 jan</p>
              </div>
              <div className={styles.container_volta}>
              <p className={styles.dia_semana}>segunda-feira</p>
              <p>19 jan</p>
              </div>
              </div>
              <div className={styles.container_preco_card_noite}>
              <p className={styles.preco_card_noite}>R$ <span className={styles.span_bold_preco}>440</span></p>
              </div>
            </div>
            </div>
           </div>
           <div className={styles.container_voos_preco}>
           <div className={styles.container_card_voos_bagagem_despacho}>
            <div className={styles.container_imagem_texto_bagagem_despacho}>
            
            <img src="/images/bagagem-para-despacho.png" className={styles.imagem_bagagem_despacho}/>
            <div className={styles.texto_bagagem_despacho}>
            <p className={styles.texto_leve_bagagem}>Leve tudo o que você precisa!</p>
            <p>Este voo inclui bagagem para despachar.</p>
            </div>
            </div>
            
           <div className={styles.card_voos}>
            
            
            <div className={styles.header}>
                <div className={styles.header_ida}>
                    <div className={styles.container_imagem_titulo}>
                    <img src="/images/aviao-ida.png" className={styles.imagem_aviao_ida}/>
                    <p className={styles.titulo_ida}>IDA</p>
                    </div>
                    <p className={styles.descricao_data}>Sex. 5 dez 2025</p>
                </div>
                <div className={styles.header_local_ida}>
                    <p>CGH</p>
                    <p className={styles.nome_cidade_bagagem}>São Paulo</p>
                </div>
                <div className={styles.header_local_volta}>
                    <p>GIG</p>
                    <p className={styles.nome_cidade_bagagem}>Rio de Janeiro</p>
                </div>
                <div className={styles.header_bagagem}>
                    <p></p>
                    <p className={styles.nome_cidade_bagagem}>Bagagem</p>
                </div>
                
            </div>
            <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
           </div>
           <div className={styles.card_voos}>
            <div className={styles.header}>
                <div className={styles.header_ida}>
                    <div className={styles.container_imagem_titulo}>
                    <img src="/images/aviao-ida.png" className={styles.imagem_aviao_ida}/>
                    <p className={styles.titulo_ida}>VOLTA</p>
                    </div>
                    <p className={styles.descricao_data}>Sex. 5 dez 2025</p>
                </div>
                <div className={styles.header_local_ida}>
                    <p>CGH</p>
                    <p className={styles.nome_cidade_bagagem}>São Paulo</p>
                </div>
                <div className={styles.header_local_volta}>
                    <p>GIG</p>
                    <p className={styles.nome_cidade_bagagem}>Rio de Janeiro</p>
                </div>
                <div className={styles.header_bagagem}>
                    <p></p>
                    <p className={styles.nome_cidade_bagagem}>Bagagem</p>
                </div>
                
            </div>
            <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.container_voo_escolhido}>
                <div className={styles.container_input_imagem_nome}>
                <input className={styles.input_radio_voo} type="radio"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.icone_companhia}/>
                <p>Azul</p>
                </div>
                <div className={styles.horario_direto}>
                    <div className={styles.container_ida_direto}>
                    <p>07:55</p>
                    <p>Direto</p>
                    </div>
                    <div className={styles.container_volta_direto}>
                    <p>09:00</p>
                    <p>1h 5m</p>
                    </div>
                    <div className={styles.container_bagagens}>
                    <div className={styles.container_imagens}>
                    <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                    <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    <div className={styles.input_dropdown}>
                        <img src="/images/drop-down.png" className={styles.imagem_dropdown}/>
                    </div>
                    </div>
                </div>
                </div>
           </div>
           </div>
           <div className={styles.container_preco}>
            
            <div className={styles.container_descricao_preco}>
            <p className={styles.descricao_preco}>Preço por adulto</p>
            </div>
            <p className={styles.preco}>R$ <span className={styles.span_preco}>634</span></p>
            <div className={styles.container_numero_adultos_preco}>
            <p className={styles.numero_adultos}>1 adulto</p>
            <p className={styles.numero_preco}>R$ 634</p>
            </div>
            <div className={styles.container_texto_impostos_preco}>
            <p className={styles.texto_impostos}>Impostos, taxas e encargos</p>
            <p className={styles.numero_preco}>R$ 158</p>
            </div>
            <div className={styles.container_preco_final_botoes}>
            <div className={styles.container_preco_final}>
            <p>Preço final</p>
            <p>R$ 792</p>
            </div>
            <div className={styles.container_botoes_coracao_comprar}>
            <button className={styles.botao_coracao}><img src="/images/coracao.png" className={styles.imagem_coracao} /></button>
            <button className={styles.botao_comprar}>Comprar</button>
            </div>
            </div>
            
           </div>
           </div>
           <div className={styles.card_propaganda_pacote_voo_hotel}>
            <div className={styles.container_titulo_itens}>
            <div className={styles.container_imagem_titulo_card_voo_hotel}>
              <img src="/images/carteira.png" className={styles.imagem_carteira}/>
              <h2>Economize até 30% montando seu pacote com voo e hotel</h2>
            </div>
            <div className={styles.container_vantagens}>
              <img src="/images/verificado.png" className={styles.imagem_verificado}/>
              <p>Comprar em pacote é o jeito mais econômico de viajar</p>
            </div>
            <div className={styles.container_vantagens}>
              <img src="/images/verificado.png" className={styles.imagem_verificado}/>
              <p>Escolha o voo e o hotel que cabem no seu orçamento</p>
            </div>
            <div className={styles.container_vantagens}>
              <img src="/images/verificado.png" className={styles.imagem_verificado}/>
              <p>Em uma compra você já resolve toda a viagem</p>
            </div>
           </div>
           <div className={styles.card_pacote}>
            <div className={styles.container_imagem_desconto}>
            <img src="/images/quarto.jpg" className={styles.imagem_quarto}/>
            <p className={styles.texto_desconto}>Até -30%</p>
            </div>
            <div className={styles.container_titulo_pacotes}>
            <div className={styles.container_icone_voo_e_icone_hotel}>
              <img src="/images/aviao-ida.png" className={styles.icone_voo_hotel}/>
              <p>VOO</p>
              <p>+</p>
              <img src="/images/cama.png" className={styles.icone_voo_hotel}/>
              <p>HOTEL</p>
            </div>
            <p className={styles.texto_pacote}>Pacote para Rio de Janeiro</p>
            <div className={styles.container_botao_montar_pacote}>
              <button className={styles.botao_montar_pacote}>Montar meu pacote</button>
            </div>
            </div>
           </div>
           </div>
           <div className={styles.card_app_qrcode}>
            <img src="/images/celular.png" className={styles.imagem_celular}/>
            <div className={styles.container_textos}>
            <div className={styles.container_imagem_texto_preco}>
              <img src="/images/celular-pequeno.png" className={styles.icone_celular} /><p>Melhor preco no app</p>
            </div>
            <h2>No app você tem preços mais baixos</h2>
            <p>Escaneie o QR e continue sua busca no app</p>
            </div>
            <img src="/images/qrcode.png" className={styles.imagem_qrcode}/>
            <img src="/images/aplicativo-movel.png" className={styles.imagem_aplicativo_movel}/>
           </div>
           <div className={styles.card_parcelada_cartao}>
            <div className={styles.container_texto_cartao}>
            <p>SUA VIAGEM PARCELADA NO CARTÃO</p>
            <h3>Pague com o seu cartão e ganhe 5% Cashback</h3>
            <p>Parcele em até 12x e resgate seu cashback no aplicativo</p>
            <p>Limitado a R$ 70</p>
           </div>
           <button className={styles.botao_montar_pacote}>Aproveitar agora</button>
           <img src="/images/bing.png" className={styles.icone_bing}/>
           </div>
            </div>
            </div>
        </div>
    )
}