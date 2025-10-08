import { useEffect, useState } from 'react';
import styles from './voos.module.css';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);
interface Voo {
  id: number;
  companhia_nome:string
  codigo_voo: string;
  origem_id: number;
  destino_id: number;
  data_partida: string;      // ou Date se você fizer parsing
  data_chegada: string;      // ou Date
  preco: number;
  companhia_id: number;
  assentos_disponiveis: number;
  origem_iata:string;
  destino_iata:string;
  companhia_logo:string;
  data_volta:string;
}


export default function Voos(){
    const [voos, setVoos] = useState<Voo[]>([]);
    const [mostrarOfertas, setMostrarOfertas] = useState(8);
    const filtros = ['Todos os filtros', 'Meses e semanas', 'Preço', 'Paradas', 'Estadia', 'Companhias','Horário','Aeroportos de ida']
    const [mostrarModal, setMostrarModal] = useState(false);
    const meses = ['Outubro 2025', 'Novembro 2025', 'Dezembro 2025', 'Janeiro 2026','Fevereiro 2026', 'Março 2026', 'Abril 2026', 'Maio 2026','Junho 2026','Julho 2026','Agosto 2026', 'Setembro 2026']
    const [mesesSelecionados, setMesesSelecionados] = useState<string[]>(["", "", "", "", ""]);
    const [mostrarMeses, setMostrarMeses] = useState(4);
    const [categoriaSelecionadas, setCategoriasSelecionadas] = useState<string[]>(["", "", "", "", ""]);
    const categorias = ['Preço', 'Paradas','Estadia','Bagagem','Companhias','Horário','Aeroportos de ida']
    const [min, setMin] = useState(300);
  const [max, setMax] = useState(1500);
  const minGap = 50;
  const [horarioMinIda, setHorarioMinIda] = useState(0);
  const [horarioMaxIda, setHorarioMaxIda] = useState(1439);
  const [horarioMinVolta, setHorarioMinVolta] = useState(0);
  const [horarioMaxVolta, setHorarioMaxVolta] = useState(1439);
  const minGapHorario = 10;
  const [botaoAplicar, setBotaoAplicar] = useState(false);
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

  const handleHorarioMinVoltaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor <= max - minGapHorario) setHorarioMinVolta(valor);
  };

  const handleHorarioMaxVoltaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor <= max - minGapHorario) setHorarioMaxVolta(valor);
  };  
  const handleHorarioMinIdaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor <= max - minGapHorario) setHorarioMinIda(valor);
  };

  const handleHorarioMaxIdaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor <= max - minGapHorario) setHorarioMaxIda(valor);
  };

   const formatarHorario = (minutos: number) => {
    const horas = Math.floor(minutos / 60);
    const mins = minutos % 60;
    return `${String(horas).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
  };

  
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor <= max - minGap) setMin(valor);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = Number(e.target.value);
    if (valor >= min + minGap) setMax(valor);
  };
    
    const handleMostrarMeses = () => {
        if(mostrarMeses < 12){
            setMostrarMeses((mostrarMeses + 4));
        }
        
    }


  const handleSelecionarMes = (index: number, mes: string) => {
    const novosMeses = [...mesesSelecionados];
    if(novosMeses[index] === mes){
        novosMeses[index] = ""
    }
    else{
        novosMeses[index] = mes;
    }
     
    setMesesSelecionados(novosMeses);

  };

  const handleSelecionarCategoria = (index: number, categoria: string) => {
    const novasCategorias = [...categoriaSelecionadas];
    if(novasCategorias[index] === categoria){
        novasCategorias[index] = ""
    }
    else{
        novasCategorias[index] = categoria;
    }
     
    setCategoriasSelecionadas(novasCategorias);

  };
   
const fetchVoos = async () => {
    try{
        const resposta = await axios.get(`${import.meta.env.VITE_API_URL}/passagens-aereas`);
    setVoos(resposta.data);
    }
    catch(err){
        console.log("erro ao buscar voos",err);
    }
    
}


    useEffect(() => {
        fetchVoos();
},[])

    return (
        <div className={styles.secao_voos}>
            <div className={styles.container_titulo_voos}>
            <div className={styles.container_card_filtros}>
            {filtros.map((item,index) => {return (
                <div onClick={() => {setMostrarModal(true)}} className={styles.card_filtro}>
                    {item}{index === 0 ? <img src="/images/filtro.png" className={styles.imagem_filtros}/> : ""}
                </div>
            )})}
             {mostrarModal && (
        <div className={styles.overlay} onClick={() => setMostrarModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.container_texto_botao_fechar}>
            <h2>Filtro</h2>
            <div>
              <img onClick={() => setMostrarModal(false)} src="/images/x-preto.png" className={styles.botao_fechar_modal}/>
            </div>
            </div>
            <div className={styles.container_meses_viagem}>
                {meses.slice(0,mostrarMeses).map((item,index) => {return (
                    <div className={styles.card_mes_viagem}>
                        <div onClick={() => {handleSelecionarMes(index, item)}} className={styles.container_texto_input}>
                        <div className={styles.container_mes_preco}>
                        <p className={styles.texto_mes}>{item}</p>
                        <p className={styles.texto_preco}>|</p>
                        <p className={styles.texto_preco}>A partir de R$443</p>
                        </div>
                        <img src="/images/drop-down.png" className={styles.icone_drop_down}/>
                        
                        </div>
                        {mesesSelecionados[index] === item ? <div className={styles.container_grid_semanas}>
                            <div className={styles.container_input_semana}>
                            <input className={styles.input_semana} type="checkbox"/>
                            <p>Todas as semanas</p>
                            </div>
                            <div className={styles.container_input_semana}>
                            <input className={styles.input_semana} type="checkbox"/>
                            <p>Segunda semana</p>
                            </div>
                            <div className={styles.container_input_semana}>
                            <input className={styles.input_semana} type="checkbox"/>
                            <p>Terceira semana</p>
                            </div>
                            <div className={styles.container_input_semana}>
                            <input className={styles.input_semana} type="checkbox"/>
                            <p>Quarta semana</p>
                            </div>
                            <div className={styles.container_input_semana}>
                            <input className={styles.input_semana} type="checkbox"/>
                            <p>Quinta semana</p>
                            </div>
                        </div> : ""} 
                    
                    </div>
                )})}
                <div className={styles.container_botao_ver_mais_meses}>
                <button onClick={() => {handleMostrarMeses()}} className={mostrarMeses < 12 ? styles.botao_ver_mais_meses : styles.botao_ver_mais_meses_off}>Ver mais meses</button>
                </div>
                <div>
            {categorias.map((item,index) => {
                return (<div>
                    <div onClick={() => {handleSelecionarCategoria(index,item)}} className={styles.container_texto_input}>
                    <p className={styles.texto_mes}>{item}</p>
                    <img src="/images/drop-down.png" className={styles.icone_drop_down}/>
                    </div>
                    {categoriaSelecionadas[index] === item && item === 'Preço' ? 
                    <div className={styles.container}>
      

      <div className={styles.sliderContainer}>
        <div className={styles.track}></div>
        <div
          className={styles.range}
          style={{
            left: `${(min / 2000) * 100}%`,
            right: `${100 - (max / 2000) * 100}%`,
          }}
        ></div>
      </div>

      <div className={styles.inputsRange}>
        <input
          type="range"
          min="0"
          max="2000"
          value={min}
          onChange={handleMinChange}
          className={styles.thumb}
        />
        <p className={styles.texto}>
        Mín.R${min}
      </p>
        <input
          type="range"
          min="0"
          max="2000"
          value={max}
          onChange={handleMaxChange}
          className={styles.thumb}
        />
        <p className={styles.texto}>
        Máx.R${max}
      </p>
      </div>
      
    </div> : categoriaSelecionadas[index] === item && item === 'Paradas' ? <div className={styles.container_grid_semanas}>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>Todas as paradas</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>Direto</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>1 parada</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>2 ou mais paradas</p>
          </div>
    </div> : categoriaSelecionadas[index] === item && item === 'Estadia' ? <div className={styles.container_grid_semanas}>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>Todas as estadias</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>De 1 a 5 dias</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>De 6 a 10 dias</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>De 11 a 15 dias</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>Mais de 15 dias</p>
          </div>
    </div>  : categoriaSelecionadas[index] === item && item === 'Bagagem' ? <div className={styles.container_grid_semanas}>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>Todas as opções</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>Bagagem de mão</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>Bagagem para despachar</p>
          </div>
    </div> : categoriaSelecionadas[index] === item && item === 'Companhias' ? <div className={styles.container_grid_semanas}>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>Todas as companhias</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/LOGO_AZUL_LINHAS_AEREAS.png" className={styles.imagem_companhia_modal} />
          <p>Azul</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MduLD3BMOnAFv0qjmgI4qvei89O9CqiWmg&s" className={styles.imagem_companhia_modal} />
          <p>Gol</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <img src="https://i.pinimg.com/736x/0d/04/bb/0d04bb1980de2098c247543a2cfeb152.jpg" className={styles.imagem_companhia_modal} />
          <p>LATAM</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>Ida e volta pela mesma Cia Aérea</p>
          </div>
    </div> : categoriaSelecionadas[index] === item && item === 'Horário' ? <div className={styles.container_horario}>

    <div className={styles.container_horario_ida}>
      <div className={styles.container_imagem_voo}>
      <div className={styles.container_imagem_ida}>
      <img src="/images/aviao-ida.png" className={styles.imagem_voo_ida}/>
      <p>Ida</p>
      </div>
      <p>Voos para Rio de Janeiro</p>
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
      <p>Voos para São Paulo</p>
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
    </div> : categoriaSelecionadas[index] === item && item === 'Aeroportos de ida' ? <div className={styles.container_grid_semanas}>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>Todos os aeroportos</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>Aeroporto Internacional de Guarulhos</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>Aeroporto Internacional Viracopos</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>Aeroporto Internacional São Jose dos Campos</p>
          </div>
          <div className={styles.container_input_semana}>
          <input type="checkbox" className={styles.input_semana}/>
          <p>Aeroporto de Congonhas</p>
          </div>
    </div> : ""}
                </div>)
            })}
           <div className={styles.container_botao_aplicar}>
            <button className={botaoAplicar ?  styles.botao_excluir_tudo_off : styles.botao_excluir_tudo}>Excluir tudo</button>
            <button className={botaoAplicar ? styles.botao_aplicar : styles.botao_aplicar_off}>Aplicar filtros</button>
           </div>
            </div>
           
            </div>
          </div>
        </div>
      )}
            </div>
            
            <div>
            <h1 className={styles.titulo_voos}>Voos mais baratos</h1>
            <div className={styles.container_voos}>
                
            
            {voos.slice(0,mostrarOfertas).map((item) => (
  <div key={item.id} className={styles.card_voo}>
    <div className={styles.container_nome_imagem_companhia}>
    <img src={item.companhia_logo} className={styles.imagem_companhia} />
    <p>{item.companhia_nome}</p>
    </div>
    <div className={styles.container_textos}>
    <div>
    <div className={styles.container_imagem_aviao}>
    <img src="/images/aviao-ida.png" className={styles.imagem_aviao_ida}/>
    <p>IDA</p>
    </div>
    <p>{item.origem_iata} - {item.destino_iata}</p>
    <p>
  {new Date(item.data_partida).toLocaleString('pt-BR', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
  })}
</p>
    <p>{new Date(item.data_partida).toLocaleString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })} - <span className={styles.direto_span}>Direto</span></p>
    </div>
    <div>
    <div className={styles.container_imagem_aviao}>
    <img src="/images/aviao-volta.png" className={styles.imagem_aviao_volta}/>
    <p>VOLTA</p>
    </div>
    <p>{item.destino_iata} - {item.origem_iata}</p>
    <p>
  {new Date(item.data_volta).toLocaleString('pt-BR', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
  })}
</p>
    <p>{new Date(item.data_volta).toLocaleString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })} - <span className={styles.direto_span}>Direto</span></p>
    </div>
    <div>
    <img src="/images/bagagem-mao.png" className={styles.imagem_bagagem}/>
    <img src="/images/bagagem.png" className={styles.imagem_bagagem}/>
    <img src="/images/bagagem-despacho.png" className={styles.imagem_bagagem}/>
    <p>10 dias</p>
    </div>
    </div>
    <div className={styles.container_preco}>
        <div className={styles.container_textos_preco}>
        <p>Por pessoa a partir de </p>
        <p className={styles.texto_preco_valor}>R$ {item.preco}</p>
        </div>
        <button className={styles.botao_seguinte} type="button">Seguinte </button>
    </div>
  </div>
))}
</div>
<div className={styles.container_botao_ver_mais}>
    <button onClick={() => {mostrarOfertas === 8 ? setMostrarOfertas(12) : setMostrarOfertas(8)}} className={styles.botao_ver_mais_ofertas}>{mostrarOfertas === 8 ? "Ver mais ofertas" : "Ver menos ofertas"}</button>
</div>
</div>
<div className={styles.container_tendencia_de_precos}>
<h1 className={styles.titulo_voos}>Tendências de preços</h1>
<div className={styles.card_tendencia_de_precos}>
<div style={{padding:"20px",display:"flex",flexDirection:"column",backgroundColor:"#FFFFFF",borderRadius:"6px"}}>
      <div style={{padding:"20px",display:"flex",alignItems:"center",height:"500px"}}>
      <Bar data={data} options={options} plugins={[customLabels]}/>
    <div>
    <p>A partir de</p> 
    <p className={styles.preco_grafico}>BRL <span className={styles.menor_preco_grafico_span}>{menorPreco}</span></p>
    <p className={styles.texto_preco_baixo}>Este é o preço mais baixo para viajar<br/> para o seu Rio de Janeiro</p>
    </div>
    
    </div>
    <div className={styles.container_texto_preco_pessoas}>
<p className={styles.texto_preco_pessoas}>Os preços que mostramos são por pessoa, ida e volta, e têm como base o histórico de busca de outros usuários.Leve em consideração que os preços podem não estar atualizados</p>
</div>
    
</div>
</div>
</div>
<div>
            <h1 className={styles.titulo_voos}>Voos diretos baratos</h1>
            <div className={styles.container_voos}>
                
            
            {voos.slice(0,mostrarOfertas).map((item) => (
  <div key={item.id} className={styles.card_voo}>
    <div className={styles.container_nome_imagem_companhia}>
    <img src={item.companhia_logo} className={styles.imagem_companhia} />
    <p>{item.companhia_nome}</p>
    </div>
    <div className={styles.container_textos}>
    <div>
    <div className={styles.container_imagem_aviao}>
    <img src="/images/aviao-ida.png" className={styles.imagem_aviao_ida}/>
    <p>IDA</p>
    </div>
    <p>{item.origem_iata} - {item.destino_iata}</p>
    <p>
  {new Date(item.data_partida).toLocaleString('pt-BR', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
  })}
</p>
    <p>{new Date(item.data_partida).toLocaleString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })} - <span className={styles.direto_span}>Direto</span></p>
    </div>
    <div>
    <div className={styles.container_imagem_aviao}>
    <img src="/images/aviao-volta.png" className={styles.imagem_aviao_volta}/>
    <p>VOLTA</p>
    </div>
    <p>{item.destino_iata} - {item.origem_iata}</p>
    <p>
  {new Date(item.data_volta).toLocaleString('pt-BR', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
  })}
</p>
    <p>{new Date(item.data_volta).toLocaleString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })} - <span className={styles.direto_span}>Direto</span></p>
    </div>
    <div>
    <img src="/images/bagagem-mao.png" className={styles.imagem_bagagem}/>
    <img src="/images/bagagem.png" className={styles.imagem_bagagem}/>
    <img src="/images/bagagem-despacho.png" className={styles.imagem_bagagem}/>
    <p>10 dias</p>
    </div>
    </div>
    <div className={styles.container_preco}>
        <div className={styles.container_textos_preco}>
        <p>Por pessoa a partir de </p>
        <p className={styles.texto_preco_valor}>R$ {item.preco}</p>
        </div>
        <button className={styles.botao_seguinte} type="button">Seguinte </button>
    </div>
  </div>
))}
</div>
<div className={styles.container_botao_ver_mais}>
    <button onClick={() => {mostrarOfertas === 8 ? setMostrarOfertas(12) : setMostrarOfertas(8)}} className={styles.botao_ver_mais_ofertas}>{mostrarOfertas === 8 ? "Ver mais ofertas" : "Ver menos ofertas"}</button>
</div>
</div>
<div>
            <h1 className={styles.titulo_voos}>Voos baratos para estadias longas</h1>
            <div className={styles.container_voos}>
                
            
            {voos.slice(0,mostrarOfertas).map((item) => (
  <div key={item.id} className={styles.card_voo}>
    <div className={styles.container_nome_imagem_companhia}>
    <img src={item.companhia_logo} className={styles.imagem_companhia} />
    <p>{item.companhia_nome}</p>
    </div>
    <div className={styles.container_textos}>
    <div>
    <div className={styles.container_imagem_aviao}>
    <img src="/images/aviao-ida.png" className={styles.imagem_aviao_ida}/>
    <p>IDA</p>
    </div>
    <p>{item.origem_iata} - {item.destino_iata}</p>
    <p>
  {new Date(item.data_partida).toLocaleString('pt-BR', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
  })}
</p>
    <p>{new Date(item.data_partida).toLocaleString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })} - <span className={styles.direto_span}>Direto</span></p>
    </div>
    <div>
    <div className={styles.container_imagem_aviao}>
    <img src="/images/aviao-volta.png" className={styles.imagem_aviao_volta}/>
    <p>VOLTA</p>
    </div>
    <p>{item.destino_iata} - {item.origem_iata}</p>
    <p>
  {new Date(item.data_volta).toLocaleString('pt-BR', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
  })}
</p>
    <p>{new Date(item.data_volta).toLocaleString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })} - <span className={styles.direto_span}>Direto</span></p>
    </div>
    <div>
    <img src="/images/bagagem-mao.png" className={styles.imagem_bagagem}/>
    <img src="/images/bagagem.png" className={styles.imagem_bagagem}/>
    <img src="/images/bagagem-despacho.png" className={styles.imagem_bagagem}/>
    <p>10 dias</p>
    </div>
    </div>
    <div className={styles.container_preco}>
        <div className={styles.container_textos_preco}>
        <p>Por pessoa a partir de </p>
        <p className={styles.texto_preco_valor}>R$ {item.preco}</p>
        </div>
        <button className={styles.botao_seguinte} type="button">Seguinte </button>
    </div>
  </div>
))}
</div>
<div className={styles.container_botao_ver_mais}>
    <button onClick={() => {mostrarOfertas === 8 ? setMostrarOfertas(12) : setMostrarOfertas(8)}} className={styles.botao_ver_mais_ofertas}>{mostrarOfertas === 8 ? "Ver mais ofertas" : "Ver menos ofertas"}</button>
</div>
</div>
<div className={styles.container_alertas}>
    <img src="/images/sino.png" className={styles.imagem_sino}/>
    <div className={styles.container_texto_botao}>
        <h4 className={styles.texto_alerta}>Alerta de preços: avisaremos você quando os preços baixarem</h4>
        <div className={styles.container_botao}>
        <button className={styles.botao_ativar_alerta}>Ativar alerta</button>
        </div>
    </div>
</div>
</div>
        </div>
    )
}