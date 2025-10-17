import styles from './navbar-checkout.module.css';

export default function NavBarCheckout(){
    return (
        
            <div className={styles.secao_nav_bar}>
            <div className={styles.container_navbar}>
            <div className={styles.container_logo_nome}>
                <img src="/images/vite.svg" className={styles.logo}/>
                <h2>SkyPass</h2>
            </div>
            <div className={styles.container_imagem_ajuda}>
                <img src="/images/ajudando.png" className={styles.imagem_ajuda}/>
                <p>Ajuda</p>
            </div>
            </div>
            </div>
        
    )
}