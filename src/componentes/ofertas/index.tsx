import styles from './ofertas.module.css';

export default function Ofertas(){
    return (
        <div className={styles.secao_ofertas}>
            <div className={styles.container_ofertas}>
            <h2 className={styles.titulo_ofertas}>Receba ofertas dos melhores destinos</h2>
            <div className={styles.container_imagens_ofertas}>
            <img src="/images/atendimento-cliente.png" className={styles.imagem_ofertas}/>
            <img src="/images/atendimento-inteligencia-artificial.png" className={styles.imagem_ofertas}/>
            </div>
        </div>
        </div>
    )
}