import { useState } from 'react';
import CardPlanejeViagem from '../card-planeje-viagem';
import styles from './secao-pagina-passageiros.module.css';
import Inscrever from '../secao-inscrever';
import FooterPrimeiraSecao from '../footer-primeira-secao';
import FooterSegundaSecao from '../footer-segunda-secao';
import FooterTerceiraSecao from '../terceira-secao-footer';

export default function SecaoPaginaPassageiros(){

    const [adicionarPassageiro, setAdicionarPassageiro] = useState(false);

    return (
        <div className={styles.secao_passageiros}>
            <div className={styles.container_titulo_passageiros}>
                <p className={styles.titulo_meu_perfil}>Meu perfil</p><span className={styles.titulo_passageiros}>/ Passageiros</span>
            </div>
            <div className={styles.secao_adicionar_passageiros}>
                <div className={styles.container_adicionar_passageiros}>
                <div className={styles.card_passageiros}>
                    <p className={styles.titulo_passageiros_card}>Passageiros</p>
                    <p className={styles.descricao_passageiros}>Complete seus dados e quem costuma viajar com você para agilizar suas próximas compras.</p>
                </div>
                <div className={styles.card_adicionar_passageiro}>
                    <div onClick={() => {setAdicionarPassageiro(true)}} className={styles.container_imagem_adicionar_passageiro}>
                        <img src="/images/mais.png" className={styles.icone_adicionar}/>
                        <p>Adicionar passageiros</p>
                    </div>
                    {adicionarPassageiro && (
                        <div>
                        <div className={styles.container_adicionar_informacoes_passageiro}>
                            <div className={styles.container_label_input}>
                                <label className={styles.label_classe}>Nome</label>
                                <input type="text" className={styles.input_nome_sobrenome}/>
                                </div>
                                <div className={styles.container_label_input}>
                                <label className={styles.label_classe}>Sobrenome</label>
                                <input type="text" className={styles.input_nome_sobrenome}/>
                                </div>
                                <div className={styles.container_label_input}>
                                <label className={styles.label_classe}>Nacionalidade</label>
                                <select className={styles.select_nacionalidade}>
                                    <option>Nacionalidade</option>
                                </select>
                                </div>
                                <div className={styles.container_tipo_e_numero_documento}>
                                
                                <div className={styles.container_label_input}>
                                
                                <label className={styles.label_classe}>Tipo e número de documento</label>
                                <div className={styles.container_label_input_tipo_documento}>
                                <select className={styles.select_tipo_documento}>
                                    <option>Tipo</option>
                                </select>
                                <input type="text" className={styles.input_numero_documento}/>
                                
                                </div>
                                
                                </div>
                                

                                
                                </div>
                                <div className={styles.container_label_input}>
                                <label className={styles.label_classe}>Data de nascimento</label>
                                <div className={styles.container_selects_data}>
                                <select className={styles.select_dia_mes_ano}>
                                    <option>Dia</option>
                                    </select>   
                                    <select className={styles.select_dia_mes_ano}>
                                    <option>Mês</option>
                                    </select> 
                                    <select className={styles.select_dia_mes_ano}>
                                    <option>Ano</option>
                                    </select>  
                                </div>
                                </div>
                                <div className={styles.container_label_inputs}>
<label className={styles.label_classe}>Sexo</label>
                                
                                <div className={styles.container_label_input_sexo}>
                                
                                <div className={styles.container_input_sexo}>
                                    <input type="radio" className={styles.input_radio}/>
                                    <p>Feminino</p>
                                    </div>
                                <div className={styles.container_input_sexo}>
                                    <input type="radio" className={styles.input_radio}/>
                                    <p>Masculino</p>
                                    </div>
                                </div>
                                </div>
                                <div className={styles.container_botoes}>
                                <button className={styles.botao_adicionar_passageiro}>Adicionar</button>
                                <button onClick={(e) => {e.stopPropagation(); setAdicionarPassageiro(false)}} className={styles.botao_cancelar_adicionar_passageiro}>Cancelar</button>
                                </div>
                        </div>
                        </div>
                    )}

                </div>
            </div>
            <CardPlanejeViagem/>
        </div>
        <Inscrever/>
        <FooterPrimeiraSecao/>
        <FooterSegundaSecao/>
        <FooterTerceiraSecao/>
        </div>
    )
}