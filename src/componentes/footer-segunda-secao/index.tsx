import styles from './footer-segunda-secao.module.css';


export default function FooterSegundaSecao(){
    return (
        <div className={styles.secao_footer}>
            <div className={styles.container_footer}>
                <div className={styles.primeira_secao_textos}>
                    <ul className={styles.ul_lista}>
                    <li className={styles.texto_primeira_secao}>Minha conta</li>
                    <li className={styles.item_lista}><a className={styles.links} href="#">Passaporte Skypass</a></li>
                    <li className={styles.item_lista}><a className={styles.links} href="#">Meu perfil</a></li>
                    <li className={styles.item_lista}><a className={styles.links} href="#">Deletar minha conta</a></li>
                    </ul>
                </div>
                <div className={styles.primeira_secao_textos}>
                    <ul className={styles.ul_lista} >
                    <li className={styles.texto_primeira_secao}>Minha conta</li>
                    <li className={styles.item_lista}><a className={styles.links} href="#">Passaporte Skypass</a></li>
                    <li className={styles.item_lista}><a className={styles.links} href="#">Meu perfil</a></li>
                    <li className={styles.item_lista}><a className={styles.links} href="#">Deletar minha conta</a></li>
                    </ul>
                </div>
                <div className={styles.primeira_secao_textos}>
                    <ul className={styles.ul_lista}>
                    <li className={styles.texto_primeira_secao}>Minha conta</li>
                    <li className={styles.item_lista}><a className={styles.links} href="#">Passaporte Skypass</a></li>
                    <li className={styles.item_lista}><a className={styles.links} href="#">Meu perfil</a></li>
                    <li className={styles.item_lista}><a className={styles.links} href="#">Deletar minha conta</a></li>
                    </ul>
                </div>
                <div className={styles.primeira_secao_textos}>
                    <ul className={styles.ul_lista}>
                    <li className={styles.texto_primeira_secao}>Minha conta</li>
                    <li className={styles.item_lista}><a className={styles.links} href="#">Passaporte Skypass</a></li>
                    <li className={styles.item_lista}><a className={styles.links} href="#">Meu perfil</a></li>
                    <li className={styles.item_lista}><a className={styles.links} href="#">Deletar minha conta</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.container_imagem_footer}>
                <img src="/images/airplan.png" className={styles.imagem_aviao}/>
            </div>
        </div>
    )
}