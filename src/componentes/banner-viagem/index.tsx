import styles from './BannerViagem.module.css';
import { useState } from 'react';

export default function BannerViagem() {

    const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
        return (
            <div className={styles.secao_banner}>
                <div className={styles.card_banner}>
                    <div className={styles.container_passagens_aereas_botoes}>
                    <p className={styles.texto_viagens}>Passagens aéreas</p>
                    <button className={styles.botao_passagens}>Ida e volta</button>
                    <button className={styles.botao_passagens}>Só ida</button>
                    <button className={styles.botao_passagens}>Multidestino</button>
                    <p className={styles.separador_botoes}>|</p>
                    <div className={styles.container_voo_hospedagem}>
                    <p className={styles.paragrafo_desconto}>Até 30% mais barato</p>
                    <button className={styles.botao_passagens}><img src="/images/aviao.png" className={styles.imagem_botao}/> Voo + <img src="/images/cama-de-casal.png" className={styles.imagem_botao}/>Hospedagem</button>
                    </div>
                    </div>
                    <div className={styles.container_inputs}>
                    <div className={styles.div_input_origem_destino}>
                    <div className={styles.div_label_input}>
                    
                    
                    <label className={styles.label_origem_destino}>ORIGEM</label>
                    <img src="/images/direita-e-esquerda.png" className={styles.imagem_seta_esquerda_direita}/>
                    <img src="/images/contorno-do-circulo.png" className={styles.imagem_input}/>
                    <input className={styles.input_origem} placeholder='Origem'/>
                    
                    </div>
                    <div className={styles.div_label_input}>
                    <label className={styles.label_origem_destino}>DESTINO</label>
                    <input className={styles.input_destino} placeholder='Destino'/>
                    <img src="/images/gps.png" className={styles.imagem_input_destino}/>
                    </div>
                    <img src="" className={styles.imagem_input_origem_destino} />
                    <img src="" className={styles.imagem_input_origem_destino} />
                    
                    </div>
                    <div className={styles.div_input_origem_destino}>
                    <div className={styles.div_label_input}>

                    
                    <label className={styles.label_origem_destino}>DATAS</label>
                    <img src="/images/calendar.png" className={styles.imagem_input}/>
                    <input className={styles.input_origem} placeholder='Ida'/>
                    </div>
                    <div className={styles.div_label_input}>
                    <label className={styles.label_origem_destino}>DESTINO</label>
                    <img src="/images/calendar.png" className={styles.imagem_input}/>
                    <input className={styles.input_destino} placeholder='Volta'/>
                    </div>
                    <img src="" className={styles.imagem_input_origem_destino} />
                    <img src="" className={styles.imagem_input_origem_destino} />
                    
                    </div>
                    <div className={styles.div_input_origem_destino}>
                    <div className={styles.div_label_input}>

                    
                    <label className={styles.label_origem_destino}>PASSAGEIROS E CLASSE</label>
                    <img src="/images/do-utilizador.png" className={styles.imagem_input}/>
                    <input className={styles.input_origem_destino} placeholder='1 pessoa,Econômica'/>
                    
                    
                    </div>
                    
                    
                    
                    </div>
                    <div className={styles.container_botao_imagem}>
                    <img src="/images/lupa.png" className={styles.imagem_lupa}/>
                    <p className={styles.botao_buscar}>Buscar</p>
                    </div>
                    </div>
                    <div className={styles.container_filtrar_por_data_mais_barata}>
                <div className={isOn ? styles.switchContainer : styles.switchContainerOff} onClick={toggleSwitch}>
      <div className={`${styles.switch} ${isOn ? styles.on : styles.off}`}></div>
    </div>
                <p>Buscar pelas data mais barata</p>
                </div>
                </div>
                
            </div>
        )
}