import styles from './ultimasBuscas.module.css';

export default function UltimasBuscas(){
    const ultimasBuscas = [
  {
    id: 1,
    tipo: "VOO",
    origem: {
      cidade: "São Paulo",
      estado: "SP",
      pais: "Brasil",
      aeroporto: "Aeroporto Internacional de Guarulhos (GRU)"
    },
    destino: {
      cidade: "Recife",
      estado: "PE",
      pais: "Brasil",
      aeroporto: "Aeroporto Internacional do Recife (REC)"
    },
    dataIda: "2025-02-04",
    dataVolta: "2025-02-08",
    descricao: "Viagem de férias para Recife",
    imagem:"/images/recife.jpg",
    imagem_tipo:"/images/aviao-icone.png"
  },
  {
    id: 2,
    tipo: "PASSEIO",
    origem: {
      cidade: "São Paulo",
      estado: "SP",
      pais: "Brasil"
    },
    destino: {
      cidade: "Recife",
      estado: "PE",
      pais: "Brasil"
    },
    dataIda: "2025-02-04",
    dataVolta: "2025-02-08",
    descricao: "Tour cultural e praias em Recife",
    imagem:"/images/saoPaulo.jpg",
    imagem_tipo:"/images/ticket-de-suporte.png"
  },
  {
    id: 3,
    tipo: "VOO",
    origem: {
      cidade: "São José dos Campos",
      estado: "SP",
      pais: "Brasil",
      aeroporto: "Aeroporto Professor Urbano Ernesto Stumpf (SJK)"
    },
    destino: {
      cidade: "Rio de Janeiro",
      estado: "RJ",
      pais: "Brasil",
      aeroporto: "Aeroporto Santos Dumont (SDU)"
    },
    dataIda: "2025-12-04",
    dataVolta: "2025-12-10",
    descricao: "Viagem de fim de ano ao Rio",
    imagem:"/images/rioDeJaneiro.jpg",
    imagem_tipo:"/images/aviao-icone.png"
  },
];
    
    
    return (
        <div className={styles.secao_ultimas_buscas}>
            <div className={styles.container_texto_card_buscas}>
            <h2 className={styles.titulo_ultimas_buscas}>Suas últimas buscas</h2>
            <div className={styles.container_card_buscas}>
                {ultimasBuscas.map((item,index) => {
                    return (
                        <div className={styles.card_busca}>
                            <img src={item.imagem} className={styles.imagem_card_busca}/>
                            <div className={styles.texto_card_busca}>
                                <div className={styles.container_imagem_tipo_card_busca}>
                                    <img src={item.imagem_tipo} className={styles.imagem_tipo_card_busca}/>
                                    <p className={styles.texto_tipo}>{item.tipo}</p>
                                    </div>
                                    <p className={styles.texto_destino}>{item.destino.cidade}</p>
                                    <p className={styles.texto_ida_volta}>{item.dataIda} a {item.dataVolta}</p>
                                    <p className={styles.texto_ida_volta}>Saindo de {item.origem.cidade}</p>
                                <div className={styles.container_botoes}>
                                    <button className={styles.botao_roteiro}>Ver roteiro da viagem</button>
                                    <button className={styles.botao_buscar}>Buscar</button>
                                </div>
                                </div>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}