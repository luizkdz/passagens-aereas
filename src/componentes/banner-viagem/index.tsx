import styles from './BannerViagem.module.css';
import { useState,forwardRef,useRef, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
export default function BannerViagem({passagensAereas}) {

    const CustomInputMultiDestino = forwardRef<HTMLInputElement, any>(({ value, onClick, placeholder}, ref) => (
  <div className={styles.container_input}>
    <img src="/images/calendar.png" className={styles.imagem_input} />
    <label className={styles.label_datas}>DATAS</label>
    <input
      value={value}
      onClick={onClick}
      placeholder={placeholder}
      ref={ref}
      readOnly
      className={styles.date_picker_multi_destino}
    />
  </div>
));
const CustomInputMultiDestinoLongo = forwardRef<HTMLInputElement, any>(({ value, onClick, placeholder}, ref) => (
  <div className={styles.container_input}>
    <img src="/images/calendar.png" className={styles.imagem_input} />
    <label className={styles.label_datas}>DATAS</label>
    <input
      value={value}
      onClick={onClick}
      placeholder={placeholder}
      ref={ref}
      readOnly
      className={styles.date_picker_multi_destino_longo}
    />
  </div>
));
const CustomInputDataIda = forwardRef<HTMLInputElement, any>(({ value, onClick, placeholder}, ref) => (
  <div className={styles.container_input}>
    <img src="/images/calendar.png" className={styles.imagem_input} />
    <label className={styles.label_datas}>DATAS</label>
    <input
      value={value}
      onClick={onClick}
      placeholder={placeholder}
      ref={ref}
      readOnly
      className={styles.date_picker_origem}
    />
  </div>
));
const CustomInputDataVolta = forwardRef<HTMLInputElement, any>(({ value, onClick, placeholder}, ref) => (
  <div className={styles.container_input}>
    <img src="/images/calendar.png" className={styles.imagem_input} />
    <label className={styles.label_datas}>VOLTA</label>
    <input
      value={value}
      onClick={onClick}
      placeholder={placeholder}
      ref={ref}
      readOnly
      className={styles.date_picker}
    />
  </div>
));
const CustomInputDataVoltaOff = forwardRef<HTMLInputElement, any>(({ value, onClick, placeholder}, ref) => (
  <div className={styles.container_input}>
    <img src="/images/calendar.png" className={styles.imagem_input} />
    <label className={styles.label_datas}>VOLTA</label>
    <input
      value={value}
      onClick={onClick}
      placeholder={placeholder}
      ref={ref}
      readOnly
      className={styles.date_picker}
      disabled
    />
  </div>
));



    const [isOn, setIsOn] = useState(false);
    const [isClicked,setIsClicked] = useState('idaEVolta');
    const [mostrarTrechos, setMostrarTrechos] = useState(2);
    const [numeroQuartos, setNumeroQuartos] = useState(1);
    const [numeroPessoas, setNumeroPessoas] = useState(1);
    const [classeEscolhida, setClasseEscolhida] = useState('Econômica');
    const [menuPassageirosClasse,setMenuPassageirosClasse] = useState(false);
    const [numeroMaioresIdade, setNumeroMaioresIdade] = useState(1);
    const [numeroMenoresIdade, setNumeroMenoresIdade] = useState(0);
    const [dataIda, setDataIda] = useState<Date | null>(null);
    const [dataIda_2, setDataIda_2] = useState<Date | null>(null);
    const [dataIda_3, setDataIda_3] = useState<Date | null>(null);
    const [dataIda_4, setDataIda_4] = useState<Date | null>(null);
    const [dataIda_5, setDataIda_5] = useState<Date | null>(null);
    const [dataVolta, setDataVolta] = useState<Date | null>(null);
    const [menuOrigem, setMenuOrigem] = useState(false);
    const menuOrigemRef = useRef<HTMLDivElement>(null);
    const menuPassageirosRef = useRef<HTMLDivElement>(null);
   
    const [menuDestino, setMenuDestino] = useState(false);
    const menuDestinoRef = useRef<HTMLDivElement>(null);
    const [nomeDestino, setNomeDestino] = useState('');
    const [menuPassageirosClasseMultiDestino, setMenuPassageirosClasseMultiDestino] = useState(false);
    const menuPassageirosClasseMultiDestinoRef = useRef<HTMLDivElement>(null);
    const [menuQuarto, setMenuQuarto] = useState(false);
    const menuQuartoRef = useRef<HTMLDivElement>(null);
    const [numeroQuartosVooHospedagem, setNumeroQuartosVooHospedagem] = useState(1);
    const [menuDestinoTrecho, setMenuDestinoTrecho] = useState(0);
    const [menuOrigemTrecho, setMenuOrigemTrecho] = useState(0);
    const menuOrigemTrechoRef = useRef<HTMLDivElement>(null);
    const menuDestinoTrechoRef = useRef<HTMLDivElement>(null);
    const [nomesCidadesOrigem, setNomesCidadesOrigem] = useState<string[]>(["", "", "", "", ""]);
    const [nomesCidadesDestino, setNomesCidadesDestino] = useState<string[]>(["", "", "", "", ""]);
    const [nomesAeroportosOrigem, setNomesAeroportosOrigem] = useState<string[]>(["", "", "", "", ""]);
    const [nomesAeroportosDestino, setNomesAeroportosDestino] = useState<string[]>(["", "", "", "", ""]);
    const [erros, setErros] = useState(['']);
    const [errosMultiplosTrechos, setErrosMultiplosTrechos] = useState(['']);

    
    const toggleAdicionarQuarto = () : void => {
        if(numeroQuartosVooHospedagem < 5)
        setNumeroQuartosVooHospedagem((inicial) => (inicial + 1))
    }
    const toggleRemoverQuarto = () : void => {
        if(numeroQuartosVooHospedagem > 1)
        setNumeroQuartosVooHospedagem((inicial) => (inicial - 1))
    }
    
    const cidades = [
  {
    municipio: "Rio de Janeiro",
    estado: "RJ",
    pais: "Brasil"
  },
  {
    municipio: "São Paulo",
    estado: "SP",
    pais: "Brasil"
  },
  {
    municipio: "Lisboa",
    estado: "Lisboa",
    pais: "Portugal"
  },
  {
    municipio: "Miami",
    estado: "Flórida",
    pais: "Estados Unidos"
  },
  {
    municipio: "Buenos Aires",
    estado: "Buenos Aires",
    pais: "Argentina"
  }
];

const aeroportos = [
  {
    cidade: "São Paulo",
    aeroporto: "Aeroporto Internacional de Guarulhos (GRU)"
  },
  {
    cidade: "Rio de Janeiro",
    aeroporto: "Aeroporto Internacional do Galeão (GIG)"
  },
  {
    cidade: "Brasília",
    aeroporto: "Aeroporto Internacional de Brasília (BSB)"
  },
  {
    cidade: "Lisboa",
    aeroporto: "Aeroporto Humberto Delgado (LIS)"
  },
  {
    cidade: "Miami",
    aeroporto: "Miami International Airport (MIA)"
  },
  {
    cidade: "Buenos Aires",
    aeroporto: "Aeropuerto Internacional Ministro Pistarini - Ezeiza (EZE)"
  },
  {
    cidade: "Paris",
    aeroporto: "Aéroport de Paris-Charles de Gaulle (CDG)"
  },
  {
    cidade: "Tóquio",
    aeroporto: "Tokyo Haneda Airport (HND)"
  }
];

const destinosMaisProcurados = [
  {
    municipio: "Rio de Janeiro",
    estado:"Rio de Janeiro",
    pais:"Brasil",
    imagem: "/images/rio-de-janeiro.jpg",
  },
  {
    municipio: "Salvador",
    estado:"Bahia",
    pais:"Brasil",
    imagem: "/images/salvador.jpg",
  },
  {
    municipio: "Fortaleza",
    estado:"Ceará",
    pais:"Brasil",
    imagem: "/images/fortaleza.jpg",
  },
];

    const diminuirMenoresIdade = () => {
        if(numeroMenoresIdade > 0)
        setNumeroMenoresIdade((inicial) => (inicial - 1));
    }

    const aumentarMenoresIdade = () => {
        if(numeroMenoresIdade + numeroMaioresIdade < 8)
        setNumeroMenoresIdade((inicial) => (inicial + 1));
    }


    const aumentarMaioresIdade = () => {
        if(numeroMaioresIdade + numeroMenoresIdade < 8)
        setNumeroMaioresIdade((inicial) => (inicial + 1))
    }

    const diminuirMaioresIdade = () => {
        if(numeroMaioresIdade > 1)
        setNumeroMaioresIdade((inicial) => (inicial - 1))
    }

    const toggleAdicionarTrecho = () => {
  if (mostrarTrechos < 5) {
    setMostrarTrechos((inicial) => inicial + 1);
  }
};
    const toggleRemoverTrecho = () => {
        setMostrarTrechos((inicial ) => inicial - 1);
    }

    const toggleIsClickedIdaEVolta = () => {
        setIsClicked('idaEVolta');
    }
    const toggleIsClickedSoIda = () => {
        setIsClicked('soIda')
    }
    const toggleIsClickedMultiDestino = () => {
        setIsClicked('multiDestino')
    }
    const toggleIsClickedVooHospedagem = () => {
        setIsClicked('vooHospedagem')
    }
    
    const toggleMenuPassageirosClasse = () => {
        setMenuPassageirosClasse(true);
    }
    
     useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuPassageirosRef.current && !menuPassageirosRef.current.contains(event.target as Node)) {
        setMenuPassageirosClasse(false); // fecha se clicar fora
      }
    }

    if (menuPassageirosClasse) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuPassageirosClasse]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuOrigemRef.current && !menuOrigemRef.current.contains(event.target as Node)) {
        setMenuOrigem(false); // fecha se clicar fora
      }
    }

    if (menuOrigem) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOrigem]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuDestinoRef.current && !menuDestinoRef.current.contains(event.target as Node)) {
        setMenuDestino(false); // fecha se clicar fora
      }
    }

    if (menuDestino) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuDestino]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuPassageirosClasseMultiDestinoRef.current && !menuPassageirosClasseMultiDestinoRef.current.contains(event.target as Node)) {
        setMenuPassageirosClasseMultiDestino(false); // fecha se clicar fora
      }
    }

    if (menuPassageirosClasseMultiDestino) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuPassageirosClasseMultiDestino]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuQuartoRef.current && !menuQuartoRef.current.contains(event.target as Node)) {
        setMenuQuarto(false); // fecha se clicar fora
      }
    }

    if (menuQuarto) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuQuarto]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuOrigemTrechoRef.current && !menuOrigemTrechoRef.current.contains(event.target as Node)) {
        setMenuOrigemTrecho(0); // fecha se clicar fora
      }
    }

    if (menuOrigemTrecho != 0) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOrigemTrecho]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuDestinoTrechoRef.current && !menuDestinoTrechoRef.current.contains(event.target as Node)) {
        setMenuDestinoTrecho(0); // fecha se clicar fora
      }
    }

    if (menuDestinoTrecho != 0) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuDestinoTrecho]);


   const handleSubmit = (e : any) => {
    e.preventDefault(); // evita o reload da página

    let valido = true;
    const novosErros = [...erros];

    nomesCidadesOrigem.forEach((valor, index) => {
      if (valor.trim() === "") {
        novosErros[0] = "Por favor, insira uma origem";
        valido = false;
      } else if (valor.length < 3) {
        novosErros[0] = "Digite pelo menos 3 letras";
        valido = false;
      } else {
        novosErros[0] = "";
      }
    });
    nomesCidadesDestino.forEach((valor, index) => {
      if (valor.trim() === "") {
        novosErros[1] = "Por favor, insira um destino";
        valido = false;
      } else if (valor.length < 3) {
        novosErros[1] = "Digite pelo menos 3 letras";
        valido = false;
      } else {
        novosErros[1] = "";
      }
    });

    if(!dataIda){
        novosErros[2] = "Selecione uma data de ida"
    }
    
    if(!dataVolta){
        novosErros[3] = "Selecione uma data de volta"
    }


    setErros(novosErros);

    if (!valido) {
      console.log("❌ Formulário inválido");
      return;
    }

    console.log("✅ Enviando formulário com dados:", nomesCidadesOrigem);
    // aqui você pode chamar a API ou fazer o que quiser com os dados
  };

  const toggleSwitch = () => setIsOn(!isOn);
        return (
            <div className={!passagensAereas ? styles.secao_banner : styles.secao_banner_passagens_aereas}>
                <div className={styles.card_banner}>
                    <div className={styles.container_passagens_aereas_botoes}>
                    <p className={styles.texto_viagens}>Passagens aéreas</p>
                    <button type="button" onClick={() => {toggleIsClickedIdaEVolta()}} className={isClicked === 'idaEVolta' ? styles.botao_passagens_true : styles.botao_passagens_false}>Ida e volta</button>
                    <button type="button" onClick={() => {toggleIsClickedSoIda()}} className={isClicked === 'soIda' ? styles.botao_passagens_true : styles.botao_passagens_false}>Só ida</button>
                    <button type="button" onClick={() => {toggleIsClickedMultiDestino()}} className={isClicked === 'multiDestino' ? styles.botao_passagens_true : styles.botao_passagens_false}>Multidestino</button>
                    {!passagensAereas ? <p className={styles.separador_botoes}>|</p> : ""}
                    {!passagensAereas ? <div className={styles.container_voo_hospedagem}>
                    <p className={styles.paragrafo_desconto}>Até 30% mais barato</p>
                    <button type="button" onClick={() => {toggleIsClickedVooHospedagem()}} className={isClicked === 'vooHospedagem' ? styles.botao_passagens_true : styles.botao_passagens_false}><img src={isClicked === "vooHospedagem" ? "/images/aviao-preto.png": "/images/aviao.png"} className={styles.imagem_botao}/> Voo + <img src={isClicked === "vooHospedagem" ? "/images/cama-de-casal-preto.png" : "/images/cama-de-casal.png"} className={styles.imagem_botao}/>Hospedagem</button>
                    </div> : ""}
                    </div>
                    {isClicked !== "multiDestino" ? <div className={styles.banner_passagens_aereas}>
                    <div className={styles.container_inputs}>
                    
                    <div className={styles.div_input_origem_destino}>
                    <div onClick={() => setMenuOrigem(!menuOrigem)} className={styles.div_label_input}>
                    
                    <label className={styles.label_origem_destino}>ORIGEM</label>
                    <img src="/images/direita-e-esquerda.png" className={styles.imagem_seta_esquerda_direita}/>
                    <img src="/images/contorno-do-circulo.png" className={styles.imagem_input}/>
                    <input value={nomesCidadesOrigem[0]} onChange={(e) => {
                        const valor = e.target.value;
                        const novo = [...nomesCidadesOrigem]; 
  novo[0] = valor;
  
setNomesCidadesOrigem(novo);
}} className={styles.input_origem} placeholder='Origem'/>
{erros[0] && !nomesCidadesOrigem[0] && <p className={styles.mensagem_erro}>{erros[0]}</p>}
                    {menuOrigem &&  (
                        <div ref={menuOrigemRef} className={styles.menu_origem}>
                            <div className={styles.container_imagem_cidades}>
                            <img src="/images/cidade.png" className={styles.icone_cidade}/>
                            
                            <p>CIDADES</p>
                            </div>
                            <div className={styles.texto_cidades}>
                            {cidades
  .filter((item) => {
    const fullName = `${item.municipio}, ${item.estado}, ${item.pais}`.toLowerCase();
    return fullName.includes(nomesCidadesOrigem[0].toLowerCase());
  })
  .map((item, index_origem) => {
    return (
      <div
        key={index_origem}
        onClick={(e) => {
            e.stopPropagation();
          setNomesCidadesOrigem((prev) => {
            const novo = [...prev];
            novo[0] = `${item.municipio}, ${item.estado}, ${item.pais}`;
            return novo;
          });
          const novosErros = [...erros];
          novosErros[0] = "";
          setErros(novosErros);
        ;
    setMenuOrigem(false)}
    }
        className={styles.container_nome_cidade}
      >
        <p className={styles.texto_municipio_estado_pais}>
          {item.municipio}, {item.estado}, {item.pais}
        </p>
      </div>
    );
  })}
                            </div>
                            <div className={styles.container_imagem_aeroportos}>
                            <img src="/images/aeroportos.png" className={styles.icone_cidade}/>
                            <p>AEROPORTOS</p>
                            </div>
                            <div className={styles.texto_aeroportos}>
                            {aeroportos.filter((item) => {return item.aeroporto.toLowerCase().includes(nomesCidadesOrigem[0].toLowerCase())}).map((item,index_aeroporto) => {
                                return (
                                    <div  onClick={(e) => {
                                        e.stopPropagation();
          setNomesCidadesOrigem((prev) => {
            const novo = [...prev];
            novo[0] = `${item.aeroporto}`;
            return novo;
          });
          const novosErros = [...erros];
          novosErros[0] = "";
          setErros(novosErros);
          setMenuOrigem(false);
        }}  className={styles.container_nome_cidade}>
                                        <p className={styles.texto_municipio_estado_pais}>{item.aeroporto}</p>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    )}
                    </div>
                    <div onClick={()=> {setMenuDestino(!menuDestino)}} className={styles.div_label_input}>
                    <label className={styles.label_origem_destino}>DESTINO</label>
                    <input value={nomesCidadesDestino[0]} onChange={(e) => {
                        const valor = e.target.value;
                        const novo = [...nomesCidadesDestino]; 
  novo[0] = valor;

setNomesCidadesDestino(novo)}} className={styles.input_destino} placeholder='Destino'/>
{erros[1] && !nomesCidadesDestino[0] && <p className={styles.mensagem_erro}>{erros[1]}</p>}
                    <img src="/images/gps.png" className={styles.imagem_input_destino}/>
                    {menuDestino && nomesCidadesDestino[0].length < 3 && (
                        <div className={styles.menu_destino} ref={menuDestinoRef}>
                            <div className={styles.container_destinos_mais_buscados}>
                            <img src="/images/estrela.png" className={styles.imagem_estrela}/>
                            <p>DESTINOS MAIS BUSCADOS</p>
                            </div>
                            {destinosMaisProcurados.filter((item) => { 
                                const fullName = `${item.municipio}, ${item.estado}, ${item.pais}`.toLowerCase();
                                return(
                                    fullName.includes(nomeDestino.toLowerCase())
                            )}).map((item,index) => {return (
                                <div key ={index} onClick={(e) => {
            e.stopPropagation();
          setNomesCidadesDestino((prev) => {
            const novo = [...prev];
            novo[0] = `${item.municipio}, ${item.estado}, ${item.pais}`;
            return novo;
          });
          const novosErros = [...erros];
          novosErros[1] = "";
          setErros(novosErros);
        ;
    setMenuDestino(false)}
    } className={styles.container_destinos_mais_procurados}>
                                    <img src={item.imagem} className={styles.imagem_destino_mais_procurado}/>
                                    <p>{item.municipio}, {item.estado}, {item.pais}</p>
                                </div>
                            )})}
                        </div>
                    )}
                    {menuDestino && nomesCidadesDestino[0].length >= 3 &&(
                        <div ref={menuDestinoRef} className={styles.menu_origem}>
                            <div className={styles.container_imagem_cidades}>
                            <img src="/images/cidade.png" className={styles.icone_cidade}/>
                            
                            <p>CIDADES</p>
                            </div>
                            <div className={styles.texto_cidades}>
                            {cidades
  .filter((item) => {
    const fullName = `${item.municipio}, ${item.estado}, ${item.pais}`.toLowerCase();
    return fullName.includes(nomesCidadesDestino[0].toLowerCase());
  })
  .map((item, index_origem) => {
    return (
      <div
        key={index_origem}
        onClick={(e) => {
            e.stopPropagation();
          setNomesCidadesDestino((prev) => {
            const novo = [...prev];
            novo[0] = `${item.municipio}, ${item.estado}, ${item.pais}`;
            return novo;
          });
        ;
    setMenuDestino(false)}
    }
        className={styles.container_nome_cidade}
      >
        <p className={styles.texto_municipio_estado_pais}>
          {item.municipio}, {item.estado}, {item.pais}
        </p>
      </div>
    );
  })}
                            </div>
                            <div className={styles.container_imagem_aeroportos}>
                            <img src="/images/aeroportos.png" className={styles.icone_cidade}/>
                            <p>AEROPORTOS</p>
                            </div>
                            <div className={styles.texto_aeroportos}>
                            {aeroportos.filter((item) => {return item.aeroporto.toLowerCase().includes(nomesCidadesDestino[0].toLowerCase())}).map((item,index_aeroporto) => {
                                return (
                                    <div  onClick={(e) => {
                                        e.stopPropagation();
          setNomesCidadesDestino((prev) => {
            const novo = [...prev];
            novo[0] = `${item.aeroporto}`;
            return novo;
          });
          setMenuDestino(false);
        }}  className={styles.container_nome_cidade}>
                                        <p className={styles.texto_municipio_estado_pais}>{item.aeroporto}</p>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    )}
                    
                    </div>
                    <img src="" className={styles.imagem_input_origem_destino} />
                    <img src="" className={styles.imagem_input_origem_destino} />
                    
                    </div>
                    <div className={styles.div_input_origem_destino}>
                    <div className={styles.div_label_input}>

                    
                    <label className={styles.label_origem_destino}>DATAS</label>
                    <img src="/images/calendar.png" className={styles.imagem_input}/>
                    <DatePicker
        className={isClicked == "soIda" ? styles.date_picker_origem : styles.date_picker_origem} 
        selected={dataIda}
        onChange={(date) => {setDataIda(date);
            const novosErros = [...erros];
            novosErros[2] = "";
            setErros(novosErros);
        }}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()} // só permite hoje em diante
        placeholderText='Ida'
        customInput={<CustomInputDataIda/>}
      />
      {erros[2] && !dataIda && <p className={styles.mensagem_erro}>{erros[2]}</p>}
                    </div>
                    <div className={styles.div_label_input}>
                    <label className={styles.label_origem_destino}>DESTINO</label>
                    <img src="/images/calendar.png" className={styles.imagem_input}/>
                    <DatePicker
        className={isClicked == "soIda" ? styles.date_picker : styles.date_picker} disabled = {isClicked === "soIda"}
        selected={dataVolta}
        onChange={(date) => {setDataVolta(date)
        ;const novosErros = [...erros];
            novosErros[3] = "";
            setErros(novosErros);}
        }
        dateFormat="dd/MM/yyyy"
        minDate={new Date()} // só permite hoje em diante
        placeholderText='Volta'
        customInput={isClicked == "soIda" ? <CustomInputDataVoltaOff/> : <CustomInputDataVolta/>}
        calendarClassName={styles.calendario_custom}
      />
      {erros[3] && !dataVolta && isClicked!= "soIda" && <p className={styles.mensagem_erro}>{erros[3]}</p>}
                    </div>
                    <img src="" className={styles.imagem_input_origem_destino} />
                    <img src="" className={styles.imagem_input_origem_destino} />
                    
                    </div>
                    <div className={styles.div_input_origem_destino}>
                    
                    {isClicked !== "vooHospedagem" ? <div onClick={() => {toggleMenuPassageirosClasse()}} className={styles.div_label_input}>

                    
                    <label className={styles.label_origem_destino}>PASSAGEIROS E CLASSE</label>
                    <img src="/images/do-utilizador.png" className={styles.imagem_input}/>
                    <input onFocus={(e) => e.target.blur()}  value={numeroPessoas} className={styles.input_origem_destino}/>
                    <p className={styles.texto_pessoas}>{numeroPessoas > 1 ? "pessoas" : "pessoa"}, {classeEscolhida.slice(0,4) + "..."}</p>
                    {menuPassageirosClasse && (
        <div ref={menuPassageirosRef} className={styles.menu_passageiros_classe}>
            <div className={styles.container_maior_idade_input}>
            <div className={styles.texto_idade}>
          <p className={styles.texto_maior_menor}>Maiores</p>
          <p className={styles.texto_maior_idade}>A partir de 18 anos</p>
          </div>
          <div className={styles.botao_numero}>
          <button type="button" disabled={numeroMaioresIdade === 1} onClick={() => {diminuirMaioresIdade()}} className={styles.botao_diminuir_inserir}>-</button>
          <p>{numeroMaioresIdade}</p>
          <button type="button" disabled={numeroMenoresIdade + numeroMaioresIdade === 8} onClick={() => {aumentarMaioresIdade()}} className={styles.botao_diminuir_inserir}>+</button>
          </div>
          </div>
          <div className={styles.container_maior_idade_input}>
            <div className={styles.texto_idade}>
          <p className={styles.texto_maior_menor}>Menores</p>
          <p className={styles.texto_maior_idade}>Até 17 anos</p>
          </div>
          <div className={styles.botao_numero}>
          <button type="button" disabled={numeroMenoresIdade === 0} onClick={() => {diminuirMenoresIdade()}} className={styles.botao_diminuir_inserir}>-</button>
          <p>{numeroMenoresIdade}</p>
          <button type="button" disabled={numeroMenoresIdade + numeroMaioresIdade === 8} onClick={() => {aumentarMenoresIdade()}} className={styles.botao_diminuir_inserir}>+</button>
          </div>
          </div>
          <div className={styles.container_classe_select}>
            <p>Classe</p>
            <select className={styles.select_classe}>
                <option>Econômica</option>
            <option>Econômica</option>
            <option>Premium economy</option>
            <option>Executiva/Business</option>
            <option>Primeira classe</option>
            <option>Premium business</option>
            <option>Premium Primeira classe</option>
            </select>
            
            </div>
            <div className={styles.container_botao_aplicar}>
                <button type="button" onClick={(e) => {e.stopPropagation();setNumeroPessoas(numeroMaioresIdade + numeroMenoresIdade);setMenuPassageirosClasse(false)}} className={styles.botao_aplicar}>Aplicar</button>
            </div>
        </div>
      )}
                    </div>: 
                    <div onClick={()=> {setMenuQuarto(true)}} className={styles.div_label_input}>

                    
                    <label className={styles.label_origem_destino}>QUARTOS</label>
                    
                    <input onFocus={(e) => e.target.blur()} className={styles.input_origem_destino}/>
                    <p className={styles.numero_quartos}>{numeroQuartosVooHospedagem}</p>
                    <p className={styles.numero_pessoas}>{numeroPessoas}</p>
                    <img src="/images/cama.png" className={styles.imagem_usuario_input_voo_hospedagem}/>
                    <img src="/images/do-utilizador.png" className={styles.imagem_cama_input_voo_hospedagem}/>
                    
                    {menuQuarto && (
                        <div ref={menuQuartoRef} className={styles.menu_passageiros_classe}>
            {Array.from({length:numeroQuartosVooHospedagem}).map((_,index) => { return (
                <div>
            <div className={styles.container_quarto_botao}><p className={styles.texto_quarto}>Quarto {index + 1}</p>
            {index + 1 == numeroQuartosVooHospedagem && index !== 0 ? <button type="button" onClick={() => {toggleRemoverQuarto()}} className={styles.botao_eliminar}>Eliminar</button>: ""}
            </div>
            <div className={styles.container_maior_idade_input}>
            <div className={styles.texto_idade}>
          <p className={styles.texto_maior_menor}>Maiores</p>
          <p className={styles.texto_maior_idade}>A partir de 18 anos</p>
          </div>
          <div className={styles.botao_numero}>
          <button type="button" disabled={numeroMaioresIdade === 1} onClick={() => {diminuirMaioresIdade()}} className={styles.botao_diminuir_inserir}>-</button>
          <p>{numeroMaioresIdade}</p>
          <button type="button" disabled={numeroMenoresIdade + numeroMaioresIdade === 8} onClick={() => {aumentarMaioresIdade()}} className={styles.botao_diminuir_inserir}>+</button>
          </div>
          </div>
          <div className={styles.container_maior_idade_input}>
            <div className={styles.texto_idade}>
          <p className={styles.texto_maior_menor}>Menores</p>
          <p className={styles.texto_maior_idade}>Até 17 anos</p>
          </div>
          <div className={styles.botao_numero}>
          <button type="button" disabled={numeroMenoresIdade === 0} onClick={() => {diminuirMenoresIdade()}} className={styles.botao_diminuir_inserir}>-</button>
          <p>{numeroMenoresIdade}</p>
          <button type="button" disabled={numeroMenoresIdade + numeroMaioresIdade === 8} onClick={() => {aumentarMenoresIdade()}} className={styles.botao_diminuir_inserir}>+</button>
          </div>
          </div>
          
            {index + 1 === numeroQuartosVooHospedagem ? <div  className={index + 1 < 5 ? styles.container_botao_aplicar_menu_quarto: styles.container_botao_aplicar_menu_quarto_end}>
                {index + 1 < 5 ? <button onClick={() => {toggleAdicionarQuarto()}} className={styles.botao_adicionar_quarto}>Adicionar Quarto</button> : ""}
                <button type="button" onClick={(e) => {setNumeroPessoas(numeroMaioresIdade + numeroMenoresIdade); setNumeroQuartos(numeroQuartos);e.stopPropagation();setMenuQuarto(false)}} className={styles.botao_aplicar}>Aplicar</button>
            </div> : ""}
                </div>
            )})}
        </div>
                    )}
                    </div>}
                    
                    
                    
                    </div>
                    <div onClick={(e) => {handleSubmit(e)}} className={styles.container_botao_imagem}>
                    <img src="/images/lupa.png" className={styles.imagem_lupa}/>
                    <p className={styles.botao_buscar}>Buscar</p>
                    </div>
                    </div>
                    <div className={styles.container_filtrar_por_data_mais_barata}>
                <div className={isOn ? styles.switchContainer : styles.switchContainerOff} onClick={toggleSwitch}>
      <div className={`${styles.switch} ${isOn ? styles.on : styles.off}`}></div>
    </div>
                <p>Buscar pelas data mais barata</p>
                </div>
                
                </div> : <div className={styles.card_trecho}>
                    
                    {Array.from({length: mostrarTrechos - 1}).map((_, index) => {
                        return (
                            <div className={styles.container_card_banner_multi_destino}>
                    <div className={styles.container_titulo_excluir}>
                            <h3 className={styles.texto_multi_destino}>Trecho {index + 1}</h3>
                            <img src="/images/x.png" onClick={() => {toggleRemoverTrecho()}} className={index + 1 > 2 && index + 1 == mostrarTrechos -1 ? styles.botao_excluir_trecho : styles.botao_excluir_trecho_disabled}/>
                    </div>
                    
                    <form>
                    <div className={styles.container_inputs_multi_destino}>
                        <div className={styles.container_origem_destino}>
                        <div onClick={() => {setMenuOrigemTrecho(index + 1)}} className={styles.div_label_input}>
                    
                    
                    <label className={styles.label_origem_destino}>ORIGEM</label>
                    <img src="/images/direita-e-esquerda.png" className={styles.imagem_seta_esquerda_direita}/>
                    <img src="/images/contorno-do-circulo.png" className={styles.imagem_input}/>
                    <input onChange={(e) => {
    const novo = [...nomesCidadesOrigem];
    novo[index] = e.target.value;
    setNomesCidadesOrigem(novo);
    const aeroporto = [...nomesAeroportosOrigem];
    aeroporto[index] = e.target.value;
    setNomesCidadesOrigem(aeroporto);

  }} value={nomesCidadesOrigem[index]} className={styles.input_origem} placeholder='Origem'/>
     {erros[index] && !nomesCidadesOrigem[index] && <p className={styles.mensagem_erro}>{erros[0]}</p>}               
                    {menuOrigemTrecho == index+1 &&  (
                        <div ref={menuOrigemTrechoRef} className={styles.menu_origem}>
                            <div className={styles.container_imagem_cidades}>
                            <img src="/images/cidade.png" className={styles.icone_cidade}/>
                            
                            <p>CIDADES</p>
                            </div>
                            <div className={styles.texto_cidades}>
                            {cidades
  .filter((item) => {
    const fullName = `${item.municipio}, ${item.estado}, ${item.pais}`.toLowerCase();
    return fullName.includes(nomesCidadesOrigem[index].toLowerCase());
  })
  .map((item, index_origem) => {
    return (
      <div
        key={index_origem}
        onClick={(e) => {
            e.stopPropagation();
          setNomesCidadesOrigem((prev) => {
            const novo = [...prev];
            novo[index] = `${item.municipio}, ${item.estado}, ${item.pais}`;
            return novo;
          });
        ;
    setMenuOrigemTrecho(0)}
    }
        className={styles.container_nome_cidade}
      >
        <p className={styles.texto_municipio_estado_pais}>
          {item.municipio}, {item.estado}, {item.pais}
        </p>
      </div>
    );
  })}
                            </div>
                            <div className={styles.container_imagem_aeroportos}>
                            <img src="/images/aeroportos.png" className={styles.icone_cidade}/>
                            <p>AEROPORTOS</p>
                            </div>
                            <div className={styles.texto_aeroportos}>
                            {aeroportos.filter((item) => {return item.aeroporto.toLowerCase().includes(nomesCidadesOrigem[index].toLowerCase())}).map((item,index_aeroporto) => {
                                return (
                                    <div  onClick={(e) => {
                                        e.stopPropagation();
          setNomesCidadesOrigem((prev) => {
            const novo = [...prev];
            novo[index] = `${item.aeroporto}`;
            return novo;
          });
          setMenuOrigemTrecho(0);
        }} key ={index} className={styles.container_nome_cidade}>
                                        <p className={styles.texto_municipio_estado_pais}>{item.aeroporto}</p>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    )}
                    </div>
                        <div onClick={() => {setMenuDestinoTrecho(index + 1)}} className={styles.div_label_input}>
                    <label className={styles.label_origem_destino}>DESTINO</label>
                    <input onChange={(e) => {
    const novo = [...nomesCidadesDestino];
    novo[index] = e.target.value;
    setNomesCidadesDestino(novo);
    ;

  }} value={nomesCidadesDestino[index]} className={styles.input_destino} placeholder='Destino'/>
  {erros[index] && !nomesCidadesDestino[index] && <p className={styles.mensagem_erro}>{erros[1]}</p>}  
                    <img src="/images/gps.png" className={styles.imagem_input_destino}/>
                    {menuDestinoTrecho === index +1 && nomesCidadesDestino[index].length < 3 && (
                        <div className={styles.menu_destino} ref={menuDestinoTrechoRef}>
                            <div className={styles.container_destinos_mais_buscados}>
                            <img src="/images/estrela.png" className={styles.imagem_estrela}/>
                            <p>DESTINOS MAIS BUSCADOS</p>
                            </div>
                            {destinosMaisProcurados.filter((item) => { 
                                const fullName = `${item.municipio}, ${item.estado}, ${item.pais}`.toLowerCase();
                                return(
                                    fullName.includes(nomesCidadesDestino[index].toLowerCase())
                            )}).map((item,index_destino) => {return (
                                <div key ={index} onClick={(e) => {
            e.stopPropagation();
          setNomesCidadesDestino((prev) => {
            const novo = [...prev];
            novo[index] = `${item.municipio}, ${item.estado}, ${item.pais}`;
            return novo;
          });
        ;
    setMenuDestino(false)}
    } className={styles.container_destinos_mais_procurados}>
                                    <img src={item.imagem} className={styles.imagem_destino_mais_procurado}/>
                                    <p>{item.municipio}, {item.estado}, {item.pais}</p>
                                </div>
                            )})}
                        </div>
                    )}
                    {menuDestinoTrecho == index+1 && nomesCidadesDestino[index].length >= 3 && (
                        <div ref={menuDestinoTrechoRef} className={styles.menu_origem}>
                            <div className={styles.container_imagem_cidades}>
                            <img src="/images/cidade.png" className={styles.icone_cidade}/>
                            
                            <p>CIDADES</p>
                            </div>
                            <div className={styles.texto_cidades}>
                            {cidades
  .filter((item) => {
    const fullName = `${item.municipio}, ${item.estado}, ${item.pais}`.toLowerCase();
    return fullName.includes(nomesCidadesDestino[index].toLowerCase());
  })
  .map((item, index_origem) => {
    return (
      <div
        key={index_origem}
        onClick={(e) => {
            e.stopPropagation();
          setNomesCidadesDestino((prev) => {
            const novo = [...prev];
            novo[index] = `${item.municipio}, ${item.estado}, ${item.pais}`;
            return novo;
          });
        ;
    setMenuDestinoTrecho(0)}
    }
        className={styles.container_nome_cidade}
      >
        <p className={styles.texto_municipio_estado_pais}>
          {item.municipio}, {item.estado}, {item.pais}
        </p>
      </div>
    );
  })}
                            </div>
                            <div className={styles.container_imagem_aeroportos}>
                            <img src="/images/aeroportos.png" className={styles.icone_cidade}/>
                            <p>AEROPORTOS</p>
                            </div>
                            <div className={styles.texto_aeroportos}>
                            {aeroportos.filter((item) => {return item.aeroporto.toLowerCase().includes(nomesCidadesDestino[index].toLowerCase())}).map((item,index_aeroporto) => {
                                return (
                                    <div  onClick={(e) => {
                                        e.stopPropagation();
          setNomesCidadesDestino((prev) => {
            const novo = [...prev];
            novo[index] = `${item.aeroporto}`;
            return novo;
          });
          setMenuDestinoTrecho(0);
        }} key ={index} className={styles.container_nome_cidade}>
                                        <p className={styles.texto_municipio_estado_pais}>{item.aeroporto}</p>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    )}
                    </div>
                        </div>
                        <div className={styles.container_data_passageiros}>
                        <div className={styles.div_label_input}>

                    
                    <label className={styles.label_origem_destino}>DATAS</label>
                    <img src="/images/calendar.png" className={styles.imagem_input}/>
                    <DatePicker
        className={index == 0 ? styles.date_picker_multi_destino : styles.date_picker_multi_destino_longo} 
        selected={index === 0 ? dataIda : index === 1 ? dataIda_2 : index === 2 ? dataIda_3 : index === 3 ? dataIda_4 : dataIda_5}
        onChange={index === 0 ? (date) => setDataIda(date) : index === 1 ? (date) => setDataIda_2(date) : index===2 ? (date) => setDataIda_3(date) : index === 3 ? (date) => setDataIda_4(date) : (date) => setDataIda_5(date)}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()} // só permite hoje em diante
        placeholderText='Ida'
        calendarClassName={styles.calendario_personalizado}
        customInput={index == 0 ? <CustomInputMultiDestino/> : <CustomInputMultiDestinoLongo/>}
        
      />
      {erros[index] && (index === 0 ? !dataIda : index === 1 ? !dataIda_2 : index === 2 ? !dataIda_3 : index === 3 ? !dataIda_4 : index === 4 ? !dataIda_5 : "") &&  <p className={erros[2] ? styles.mensagem_erro : styles.mensagem_erro_disabled}>{erros[2]}</p>}  
                    </div>
                        
                    {index == 0 ? <div onClick={() => {setMenuPassageirosClasseMultiDestino(true)}} className={styles.div_label_input}>

                    
                    <label className={styles.label_origem_destino}>PASSAGEIROS E CLASSE</label>
                    <img src="/images/do-utilizador.png" className={styles.imagem_input}/>
                    <input value={numeroPessoas} type="text" className={styles.input_origem_destino} />
                    <p className={styles.texto_pessoas}>{numeroPessoas > 1 ? "pessoas" : "pessoa"}, {classeEscolhida.slice(0,4) + "..."}</p>
                    {menuPassageirosClasseMultiDestino && (
        <div ref={menuPassageirosClasseMultiDestinoRef} className={styles.menu_passageiros_classe}>
            <div className={styles.container_maior_idade_input}>
            <div className={styles.texto_idade}>
          <p className={styles.texto_maior_menor}>Maiores</p>
          <p className={styles.texto_maior_idade}>A partir de 18 anos</p>
          </div>
          <div className={styles.botao_numero}>
          <button type="button" disabled={numeroMaioresIdade === 1} onClick={() => {diminuirMaioresIdade()}} className={styles.botao_diminuir_inserir}>-</button>
          <p>{numeroMaioresIdade}</p>
          <button type="button" disabled={numeroMenoresIdade + numeroMaioresIdade === 8} onClick={() => {aumentarMaioresIdade()}} className={styles.botao_diminuir_inserir}>+</button>
          </div>
          </div>
          <div className={styles.container_maior_idade_input}>
            <div className={styles.texto_idade}>
          <p className={styles.texto_maior_menor}>Menores</p>
          <p className={styles.texto_maior_idade}>Até 17 anos</p>
          </div>
          <div className={styles.botao_numero}>
          <button disabled={numeroMenoresIdade === 0} onClick={() => {diminuirMenoresIdade()}} className={styles.botao_diminuir_inserir}>-</button>
          <p>{numeroMenoresIdade}</p>
          <button type="button" disabled={numeroMenoresIdade + numeroMaioresIdade === 8} onClick={() => {aumentarMenoresIdade()}} className={styles.botao_diminuir_inserir}>+</button>
          </div>
          </div>
          <div className={styles.container_classe_select}>
            <p>Classe</p>
            <select className={styles.select_classe}>
                <option>Econômica</option>
            <option>Econômica</option>
            <option>Premium economy</option>
            <option>Executiva/Business</option>
            <option>Primeira classe</option>
            <option>Premium business</option>
            <option>Premium Primeira classe</option>
            </select>
            
            </div>
            <div className={styles.container_botao_aplicar}>
                <button type="button" onClick={(e) => {e.stopPropagation();setNumeroPessoas(numeroMaioresIdade + numeroMenoresIdade);setMenuPassageirosClasseMultiDestino(false)}} className={styles.botao_aplicar}>Aplicar</button>
            </div>
        </div>
      )}
                    </div>: ""}
                        </div>
                        
                        </div>
                        </form>
                    </div>
                    
                        )
                        
                    })}
                    <div className={mostrarTrechos !== 5 ? styles.container_paragrafo_botao_buscar : styles.container_paragrafo_botao_buscar_disabled}>
                    <p onClick={() => {toggleAdicionarTrecho()}} className={mostrarTrechos !== 5 ? styles.paragrafo_novo_trecho : styles.paragrafo_novo_trecho_disabled}>Acrescentar novo trecho</p>
                    <div onClick={(e) => {handleSubmit(e)}} className={styles.container_botao_imagem_multi_destino}>
                    <img src="/images/lupa.png" className={styles.imagem_lupa}/>
                    <p className={styles.botao_buscar}>Buscar</p>
                    </div>
                    </div>
                    </div>} 
                </div>
                 
            </div>
        )
}