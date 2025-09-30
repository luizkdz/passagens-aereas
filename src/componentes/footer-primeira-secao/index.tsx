import styles from './footer-primeira-secao.module.css';


export default function FooterPrimeiraSecao(){

    const icones = ['/images/facebook.png','/images/instagram.png','/images/twitter.png','/images/youtube.png'];

        return (
            <div className={styles.secao_footer}>
                <div className={styles.container_footer}>
                    <div className={styles.container_icones}>
                        {icones.map((imagem,index) => {return (
                            <div key={index}>
                                <img src={imagem} className={styles.imagem_icone}/>
                            </div>
                        )})}
                    </div>
                    <div className={styles.container_textos}>
                        <p className={styles.texto_central_vendas}>Central de vendas <span className={styles.texto_atendimento}>0800 0800 8000 8000</span></p>
                        <p className={styles.texto_central_vendas}>Pós venda <span className={styles.texto_atendimento}>Atendimento ao cliente</span></p>
                    </div>
                </div>
            </div>
        )
}