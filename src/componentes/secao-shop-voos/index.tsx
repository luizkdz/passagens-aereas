import BannerViagem from '../banner-viagem';
import styles from './shop-voos.module.css';
import { useEffect, useState } from "react";

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
                    
                    <div className={styles.container_preco_companhia}>
                    <p>Preços por companhia aérea</p>
                    </div>
                    <div className={styles.container_preco_companhia_3_dias}>
                    <p>Preços +/- 3 dias</p>
                    </div>
                    <div className={styles.container_tendencia_de_precos}>
                    <p>Tendência de preços</p>
                    </div>
                </div>
               <div className={styles.container_titulo}>
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
               </div>

           </div>
           <p>oI</p>
            </div></div>
        </div>
    )
}