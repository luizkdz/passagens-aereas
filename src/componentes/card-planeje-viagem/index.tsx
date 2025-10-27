import styles from './card-planeje-viagem.module.css';


export default function CardPlanejeViagem(){
    return (
    <div className={styles.card_planeje_viagem}>
                    <div className={styles.container_imagem_planeje_botao}>
                        <img src="/images/bagagem-card.png" className={styles.icone_bagagem}/>
                        <p className={styles.titulo_planeje}>Planeje a sua nova viagem</p>
                        <p className={styles.descricao_planeje}>Aproveite as ofertas de hospedagens, voos, atrações e muito mais.</p>
                        <button className={styles.botao_encontre_seu_voo}>Encontre seu voo</button>
                    </div>
                    <div className={styles.container_links}>
                        <div className={styles.container_imagem_link}>
                            <img src="/images/usuario-cinza.png" className={styles.icone_imagem_link}/>
                            <p>Dados pessoais</p>
                        </div>
                        <div className={styles.container_imagem_link}>
                            <img src="/images/cartao-cinza.png" className={styles.icone_imagem_link}/>
                            <p>Formas de pagamento</p>
                        </div>
                        <div className={styles.container_imagem_link}>
                            <img src="/images/sino-cinza.png" className={styles.icone_imagem_link}/>
                            <p>Notificações sobre alterações</p>
                        </div>
                        <div className={styles.container_imagem_link}>
                            <img src="/images/passageiro-cinza.png" className={styles.icone_imagem_link}/>
                            <p>Passageiros</p>
                        </div>
                        <div className={styles.container_imagem_link}>
                            <img src="/images/chat-cinza.png" className={styles.icone_imagem_link}/>
                            <p>Opiniões</p>
                        </div>
                        <div className={styles.container_imagem_link}>
                            <img src="/images/celular-pequeno-cinza.png" className={styles.icone_imagem_link}/>
                            <p>Seções ativas</p>
                        </div>
                        <div className={styles.container_imagem_link}>
                            <img src="/images/lixeira-cinza.png" className={styles.icone_imagem_link}/>
                            <p>Eliminar conta</p>
                        </div>

                    </div>
                    </div>
                    )
}