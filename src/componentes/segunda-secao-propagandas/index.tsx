import styles from './segunda-secao-propagandas.module.css';

export default function SegundaSecaoPropagandas() {
    return (
        <div className={styles.secao_propagandas}>
            <div className={styles.container_secao_propagandas}>
                <img src="/images/imagem-promocao.png" className={styles.imagem_promocao_propaganda}/>
                <img src="/images/imagem-qr-code.png" className={styles.imagem_promocao_propaganda}/>
            </div>
        </div>
    )
}