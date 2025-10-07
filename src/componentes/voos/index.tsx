import { useEffect, useState } from 'react';
import styles from './voos.module.css';
import axios from 'axios';

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

        </div>
    )
}