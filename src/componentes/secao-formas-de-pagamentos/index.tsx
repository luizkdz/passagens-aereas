import { useState } from 'react';
import CardPlanejeViagem from '../card-planeje-viagem';
import styles from './secao-formas-de-pagamentos.module.css';

export default function SecaoFormasDePagamentos(){

    const [adicionarFaturamento, setAdicionarFaturamento] = useState(false);
    return (
        
        <div className={styles.secao_formas_de_pagamentos}>
            
            <div className={styles.container_titulo_meu_perfil}>
                <p className={styles.titulo_meu_perfil}>Meu Perfil</p><span className={styles.titulo_formas_de_pagamento}>/ Formas de pagamentos</span>
            </div>
            
            <div className={styles.secao_cartoes_faturamento}>
                <div className={styles.container_cartoes_faturamento}>
                <div className={styles.card_cartoes}>
                    <p className={styles.titulo_cartoes}>Cartões de crédito</p>
                    <p className={styles.descricao_cartoes}>Insira os dados do seu cartão de crédito para agilizar o pagamento das suas viagens.</p>
                </div>
                <div className={styles.card_adicionar_cartao}>
                    <div className={styles.container_imagem_adicionar_cartao}>
                        <img src="/images/mais.png" className={styles.icone_adicionar}/>
                        <p>Adicionar cartão de crédito</p>
                    </div>

                </div>
                <div className={styles.card_faturamento}>
                    <p className={styles.titulo_faturamento}>Faturamento</p>
                    <p className={styles.descricao_faturamento}>Complete os seus dados de faturamento e agilize o pagamento da sua próxima viagem.</p>
                </div>
                <div className={styles.card_insira_dados_faturamento}>
                    <div onClick={() => {setAdicionarFaturamento(true)}} className={styles.container_imagem_adicionar_faturamento}>
                        <img src="/images/mais.png" className={styles.icone_adicionar}/>
                        <p>Insira os dados de faturamento</p>
                    </div>
                    {adicionarFaturamento && (
                        <div className={styles.container_adicionar_faturamento}>
                            <div className={styles.container_label_tipo_pessoa}>
                            <label className={styles.label_situacao_fiscal}>SITUAÇÃO FISCAL</label>
                            <div className={styles.container_input_tipo_pessoa}>
                            <input type="radio" className={styles.input_radio}/>
                            <p className={styles.texto_pessoa}>Pessoa Física</p>    
                            </div>
                            <div className={styles.container_input_tipo_pessoa}>
                            <input type="radio" className={styles.input_radio}/>
                            <p className={styles.texto_pessoa}>Pessoa Jurídica</p>    
                            </div>
                            </div>
                            <div className={styles.container_input_contribuinte}>
                                <input type="checkbox" className={styles.input_checkbox}/>
                                <p className={styles.titulo_contribuinte}>CONTRIBUINTE ESTRANGEIRO</p>
                            </div>
                            <div className={styles.container_inputs}>
                            <div className={styles.container_label_input_nome_cpf_cep}>
                                <label className={styles.label_nome_cpf_cep}>NOME COMPLETO</label>
                                <input type="text" className={styles.input_nome}/>
                        </div>
                        <div className={styles.container_label_input_nome_cpf_cep}>
                                <label className={styles.label_nome_cpf_cep}>CPF</label>
                                <input type="text" className={styles.input_nome}/>
                        </div>
                        <div className={styles.container_label_input_nome_cpf_cep}>
                                <label className={styles.label_nome_cpf_cep}>CEP</label>
                                <input type="text" className={styles.input_nome}/>
                        </div>
                        <div className={styles.container_botoes_adicionar_cancelar}>
                            <button className={styles.botao_adicionar}>Adicionar</button>
                            <button onClick={() => {setAdicionarFaturamento(false)}} className={styles.botao_cancelar}>Cancelar</button>
                        </div>
                        </div>
                    </div>)}
                </div>
            </div>
            <div className={styles.container_card_planeje}>
                <CardPlanejeViagem/>
            </div>
            </div>
        
        

        </div>
    )
}