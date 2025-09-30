import styles from './passagens-aereas.module.css'
import { useState } from 'react';
export default function PassagensAereas(){
    
    const passagensAereas = [{
    destino: "Rio de Janeiro",
    origem: "São Paulo",
    companhia: "LATAM",
    preco: "R$ 450",
    data: "15/11/2025",
    imagem: "/images/foto-passagem-1.jpg",
  },
  {
    destino: "Salvador",
    origem: "Brasília",
    companhia: "GOL",
    preco: "R$ 520",
    data: "20/11/2025",
    imagem: "/images/foto-passagem-2.jpg",
  },
  {
    destino: "Florianópolis",
    origem: "Curitiba",
    companhia: "AZUL",
    preco: "R$ 310",
    data: "05/12/2025",
    imagem: "/images/foto-passagem-3.jpg",
  },
  {
    destino: "Fortaleza",
    origem: "São Paulo",
    companhia: "LATAM",
    preco: "R$ 670",
    data: "10/12/2025",
    imagem: "/images/foto-passagem-4.jpg",
  },
{
    destino: "Fortaleza",
    origem: "São Paulo",
    companhia: "LATAM",
    preco: "R$ 670",
    data: "10/12/2025",
    imagem: "/images/foto-passagem-4.jpg",
  },
  {
    destino: "Fortaleza",
    origem: "São Paulo",
    companhia: "LATAM",
    preco: "R$ 670",
    data: "10/12/2025",
    imagem: "/images/foto-passagem-4.jpg",
  },
  {
    destino: "Fortaleza",
    origem: "São Paulo",
    companhia: "LATAM",
    preco: "R$ 670",
    data: "10/12/2025",
    imagem: "/images/foto-passagem-4.jpg",
  }
]; 
    
  const [index, setIndex] = useState(0);
  

  function prevSlide() {
    setIndex((old) => (old - 1 + passagensAereas.length) % (passagensAereas.length - 3 ));
  }

  function nextSlide() {
    setIndex((old) => (old + 1) % (passagensAereas.length - 3));
  }
    
    
    return (
        <div className={styles.secao_passagens_aereas}>
            <div className={styles.container_carousel}>
            <h2 className={styles.titulo_passagem_aerea}>Passagens aéreas baratas para destinos populares no Brasil</h2>
            <div className={styles.container_passagens_aereas } style={{ transform: `translateX(-${index * 25}%)` }}>
            {passagensAereas.map((item,index) => {
                return (
                    <div className={styles.card_passagem_aerea}>
                        <img src={item.imagem} className={styles.imagem_passagem}/>
                        <div className={styles.texto_card_passagem_aerea}>
                        <p className={styles.texto_passagem}>Passagem </p>
                        <p className={styles.texto_destino}>Voos para {item.destino}</p>
                        <p className={styles.texto_origem}>Saindo de {item.origem}</p>
                        <p className={styles.texto_companhia}>Por {item.companhia} </p>
                        <p className={styles.texto_ida_volta}>Ida e Volta</p>
                        <p className={styles.texto_preco_ida_volta}>Preço ida e volta</p>
                        <p className={styles.texto_preco}>{item.preco}</p>
                        <p className={styles.texto_data_referencia}>Data de referência: {item.data}</p>
                        <div className={styles.container_passaporte_pontos}>
                        <img src="/images/passaporte-pontos.png" className={styles.imagem_passaporte}/>
                        <div className={styles.container_texto_passaporte_pontos}>
                        <p className={styles.texto_passaporte}>Passaporte Skypass</p>
                        <p className={styles.texto_pontos}>Você acumula <strong>5 pontos</strong></p>
                        </div>
                        
                        </div>
                        </div>
                    </div>
                )
            })}
            </div>
             <button className={styles.prev} onClick={prevSlide}>
          ◀
        </button>
        <button className={styles.next} onClick={nextSlide}>
          ▶
        </button>

</div>
        </div>
    )
}