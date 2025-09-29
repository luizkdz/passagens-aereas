import styles from './inscrever.module.css';


export default function Inscrever(){
    return (
        <div className={styles.secao_inscrever}>
            <div className={styles.container_inscrever}>
                <img src="/images/e-mail.png" className={styles.imagem_email}/>
                <div className={styles.texto_secao_inscrever}>
                    <h3 className={styles.titulo_inscrever}>Inscreva-se para receber ofertas exclusivas</h3>
                    <div className={styles.container_input_botao}>
                    <input className={styles.input_inscrever} placeholder="Insira seu e-mail"/>
                    <button className={styles.botao_inscrever}>Quero recebê-las!</button>
                    </div>
                    <p>Você receberá e-mails promocionais da Skypass. Para mais informações, consulte<br/> as <span className={styles.texto_politicas}>políticas de privacidade</span></p>
                    
                    
                </div>
            </div>
        </div>
    )
}