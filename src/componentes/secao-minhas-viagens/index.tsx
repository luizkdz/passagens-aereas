import FooterPrimeiraSecao from '../footer-primeira-secao';
import FooterSegundaSecao from '../footer-segunda-secao';
import FooterTerceiraSecao from '../terceira-secao-footer';
import styles from './secao-minhas-viagens.module.css';
import { useState } from 'react';
export default function SecaoMinhasViagens(){

    const [selecionado,setSelecionado] = useState('planejadas');


    return (
        <div className={styles.secao_minhas_viagens}>
            <div className={styles.container_minhas_viagens}>
            <h2 className={styles.titulo_minhas_viagens}>Minhas Viagens</h2>
            </div>
            <div className={styles.container_planejadas_ativas_passadas}>
                <ul className={styles.lista_passagens}>
                    <li onClick={() => {setSelecionado('planejadas')}} className={selecionado === "planejadas" ? styles.item_lista_ativa : styles.item_lista }>Planejadas</li>
                    <li onClick={() => {setSelecionado('ativas')}}className={selecionado === "ativas" ? styles.item_lista_ativa : styles.item_lista }>Ativas</li>
                    <li onClick={() => {setSelecionado('passadas')}} className={selecionado === "passadas" ? styles.item_lista_ativa : styles.item_lista_passada }>Passadas</li>
                </ul>
            </div>
            <div className={styles.container_viagens_planejadas}>
                {selecionado === "planejadas" && <div className={styles.container_card}>
                <div className={styles.card_planeje_viagem}>
                    <img src="/images/mochila.png" className={styles.icone_mochila}/>
                    <h2 className={styles.titulo_planeje}>Planeje sua próxima viagem com a Inteligência Artificial</h2>
                    <p className={styles.descricao_planeje}>Salve as opções como favoritas ou peça à SOFIA, nossa assistente de IA, para te ajudar a criar um roteiro de viagem ideal.</p>
                    <div className={styles.container_botao_criar_roteiro}>
                    <button className={styles.botao_criar_roteiro}><img src="/images/estrelas-de-natal.png" className={styles.icone_estrelas_natal} />Criar um roteiro de viagem</button>
                </div>
                </div>
                </div>}
                {selecionado === "ativas" && <div className={styles.card_inteligencia_artificial}>
                    <div className={styles.container_imagem_inteligencia_artificial_planeje}>
                        <img src="/images/inteligencia-artificial.png" className={styles.imagem_inteligencia_artificial}/>
                        <div className={styles.container_texto_botao_planeje}>
                        <h2 className={styles.titulo_planeje_ia}>Planeje sua próxima viagem com a Inteligência Artificial</h2>
                        <p className={styles.descricao_planeje_ia}>Nossa assistente de IA te ajuda a encontrar o destino ideal para suas férias.</p>
                        <button className={styles.botao_planeje_viagem}>Planeje sua viagem</button>
                        </div>
                    </div>
                    <div className={styles.container_nao_encontrou}>
                        <p className={styles.texto_nao_encontrou}>Não encontrou a reserva? <span className={styles.span_buscar_reservas}>Buscar reserva</span></p>
                    </div>
                    <div className={styles.card_economize_qr_code}>
                        <div className={styles.container_imagem_texto_economize}>
                            <img src="/images/celular.png" className={styles.imagem_celular}/>
                            <div className={styles.container_texto_economize}>
                                <h3 className={styles.titulo_economize}>Economize nas suas viagens!</h3>
                                <p className={styles.descricao_economize}>Com o nosso app você paga mais barato e tem as suas reservas sempre à mão.</p>
                                </div>
                            <img src="/images/qrcode.png" className={styles.icone_qr_code}/>
                        </div>
                    </div>
                    </div>}
                   

            </div>
             <FooterPrimeiraSecao/>
            <FooterSegundaSecao/>
            <FooterTerceiraSecao/>
        </div>
    )
}