import styles from './secao-checkout.module.css';
import Select from 'react-select';
import { useState } from 'react';
export default function SecaoCheckout(){

    const options = [
  { value: 'voo1', label: 'Brasil', image: '/images/aviao.png' },
  { value: 'voo2', label: 'Tunísia', image: '/images/aviao2.png' },
];

const [selectedOption, setSelectedOption] = useState<OptionType | null>(options[0]);
const [mostrarBagagem, setMostrarBagagem] = useState(false);
const [mostrarSeguro, setMostrarSeguro] = useState(true);
  const handleChange = (option: SingleValue<OptionType>) => {
    setSelectedOption(option);
 
  };
    return (
        <div className={styles.secao_checkout}>
            <div className={styles.container_pagamento}>
                <div className={styles.container_voltar_titulo_dados}>
                <p>Voltar para página anterior</p>
                <h1 className={styles.titulo_completar_dados}>Agora só falta completar os dados e finalizar a compra!</h1>
                </div>
                <div className={styles.card_quem_viaja}>
                    <h3 className={styles.titulo_quem_viaja}>Quem viaja?</h3>
                    <p className={styles.texto_adulto}>Adulto</p>
                    <div className={styles.container_label_input}>
                    <label>NOME</label>
                    <input type="text" className={styles.input_nome} placeholder='Como está no documento'/>
                    </div>
                    <div className={styles.container_label_input}>
                    <label>ÚLTIMO SOBRENOME</label>
                    <input type="text" className={styles.input_nome} placeholder='Como está no documento'/>
                    </div>
                    <div className={styles.label_container}>
                    <label>PAÍS DE RESIDÊNCIA</label>
                    <div style={{width:"200px"}}>
                        <Select value={selectedOption}
                        onChange={handleChange} options={options}
                         formatOptionLabel={(option) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
          <img src={option.image} alt="" width={20} height={20} />
          <span>{option.label}</span>
        </div>
      )}
    />
    </div>
    </div>
    <div className={styles.container_tipo_documento_numero}>
    <div className={styles.container_label_input}>
    <label>TIPO DE DOCUMENTO</label>
    <select className={styles.select_cpf}>
        <option>CPF</option>
    </select>
    </div>
    <div className={styles.container_label_input}>
    <label>NÚMERO</label>
    <input type="number" placeholder='Número' className={styles.input_numero}/>
    </div>
    </div>
    <div className={styles.container_label_input}>
    <label>DATA DE NASCIMENTO</label>
    <div className={styles.container_selects}>
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
    <div className={styles.label_container}>
    <label>SEXO</label>
    <div className={styles.container_sexo}>
        <div className={styles.container_masculino_feminino}>
        <div className={styles.container_input_genero_feminino}>
        <input type="radio"/>
        <p>Feminino</p>
        </div>
        <div className={styles.container_input_genero_masculino}>
        <input type="radio"/>
        <p>Masculino</p>
        </div>
        </div>
    </div>
    </div>
                </div>
                <div className={styles.card_inclui_bagagem}>
                    <div onClick={() => {setMostrarBagagem(!mostrarBagagem)}} className={styles.container_texto_imagem_botoes}>
                    <div className={styles.container_imagem_texto_bagagem}>
                    <img src="/images/bagagem.png" className={styles.imagem_bagagem}/>
                    <p>Seus voos só incluem bagagem de mão</p>
                    </div>
                    <div className={styles.container_botao_adicionar_bagagem_dropdown}>
                        <button onClick={(e) => {e.stopPropagation(); }} className={!mostrarBagagem ? styles.botao_adicionar_bagagem : styles.botao_adicionar_bagagem_off}>Adicionar bagagem</button>
                        <img src="/images/drop-down.png" className={styles.icone_drop_down}/>
                    </div>
                    </div>
                {mostrarBagagem && (
                    <div className={styles.container_mostrar_bagagem_aberto}>
                        <div className={styles.texto_itens}>
                        <p className={styles.titulo_ida}>IDA</p>
                        <p><strong>CGH</strong> (São Paulo) &#8594; <strong>GIG</strong> (Rio de Janeiro)</p>
                        <div className={styles.container_lista_bagagens}>
                            <div className={styles.container_imagem_bagagem_texto}>
                                <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                                <div>
                                    <p className={styles.paragrafo_inclui_verde}>Inclui uma mochila ou bolsa</p>
                                    <p className={styles.paragrafo_descricao_inclui}>Deve caber embaixo do assento dianteiro.</p>
                                </div>
                                   </div>
                                   <div className={styles.container_imagem_bagagem_texto}>
                                <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                                <div>
                                    <p className={styles.paragrafo_inclui_verde}>Inclui bagagem de mão</p>
                                    <p className={styles.paragrafo_descricao_inclui}>Deve caber no compartimento superior do avião.</p>
                                </div>
                                   </div>
                                   <div className={styles.container_imagem_bagagem_texto}>
                                <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                                <div>
                                    <p className={styles.paragrafo_inclui_verde}>Não inclui bagagem para despachar</p>
                                    <p className={styles.paragrafo_descricao_inclui}>Você poderá adicionar malas por um valor adicional quando chegar ao aeroporto</p>
                                </div>
                                   </div>
                        </div>
                    </div>
                    <div className={styles.texto_itens}>
                        <p className={styles.titulo_ida}>VOLTA</p>
                        <p><strong>CGH</strong> (São Paulo) &#8594; <strong>GIG</strong> (Rio de Janeiro)</p>
                        <div className={styles.container_lista_bagagens}>
                            <div className={styles.container_imagem_bagagem_texto}>
                                <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                                <div>
                                    <p className={styles.paragrafo_inclui_verde}>Inclui uma mochila ou bolsa</p>
                                    <p className={styles.paragrafo_descricao_inclui}>Deve caber embaixo do assento dianteiro.</p>
                                </div>
                                   </div>
                                   <div className={styles.container_imagem_bagagem_texto}>
                                <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                                <div>
                                    <p className={styles.paragrafo_inclui_verde}>Inclui bagagem de mão</p>
                                    <p className={styles.paragrafo_descricao_inclui}>Deve caber no compartimento superior do avião.</p>
                                </div>
                                   </div>
                                   <div className={styles.container_imagem_bagagem_texto}>
                                <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                                <div>
                                    <p className={styles.paragrafo_inclui_verde}>Não inclui bagagem para despachar</p>
                                    <p className={styles.paragrafo_descricao_inclui}>Você poderá adicionar malas por um valor adicional quando chegar ao aeroporto</p>
                                </div>
                                   </div>
                        </div>
                    </div>
                    
                    
                    
                    </div>
                )}
                
                </div>
                <div className={styles.card_transfer}>
                    <div className={styles.container_imagem_texto_van}>
                        
                        <img src="/images/van-de-campista.png" className={styles.icone_van}/>
                        <div className={styles.texto_transfer}>
                            <div className={styles.container_texto_span}>
                            <p>Transfer de ida e volta</p><span className={styles.span_melhor_preco}>Melhor preço agora</span>
                            </div>
                            <p className={styles.texto_viagem}>Viaje com tudo organizado e sem preocupação! Chegue a sua hospedagem e ao aeroporto de forma comoda e segura.</p>
                        </div>
                        <button className={styles.botao_preco}>Calcular o preço</button>
                    </div>
                </div>
                <div className={styles.card_cuide}>
                    <div className={styles.container_imagem_texto_cuide}>
                        <div className={styles.container_imagem_bing_texto_cuide}>
                        <img src="/images/bing.png" className={styles.imagem_bing}/>
                        <div className={styles.container_texto_cuide}>
                            <div className={styles.container_texto_span}>
                            <p className={styles.texto_cuide}>Cuide-se em caso de imprevistos e gastos extras</p>
                            <span className={styles.span_melhor_preco}>Melhor preço agora</span>
                            </div>
                            <p className={styles.texto_descricao_cuide}>Compre agora o seu seguro e viaje com tranquilidade.</p>
                        </div>
                        </div>
                    <img onClick ={() => {setMostrarSeguro(!mostrarSeguro)}} src="/images/drop-down.png" className={styles.icone_drop_down}/>
                    </div>
                    {mostrarSeguro && (
                        <div className={styles.container_cards_seguro_cuide}>
                        <div className={styles.card_seguro_cuide}>
                            <div className={styles.primeira_secao_card_seguro_cuide}>
                                <div className={styles.container_titulo_card_seguro}>
                            <p className={styles.titulo_card_seguro}>Sem seguro viagem</p>
                            </div>
                             <div className={styles.container_preco_card_seguro}>
                            <p className={styles.paragrafo_preco}>R$ 0</p>
                            </div>  
                            <button className={styles.botao_selecionar_seguro}>Selecionar</button>
                        </div>
                        <div className={styles.segunda_secao_card_seguro_cuide}>
                            <p className={styles.titulo_segunda_secao_card_seguro}>Vai viajar sem seguro?</p>
                            <p className={styles.descricao_seguro}>O seguro viagem te protege em caso de imprevistos, como atraso de bagagem, cancelamentos ou emergências médicas.</p>
                        </div>
                        <div className={styles.container_recomendacao_seguro}>
                        <img src="/images/x.png" className={styles.icone_nao_recomendado}/>
                        <p>Opção não recomendada</p>
                        </div>
                        </div>
                        <div className={styles.card_seguro_cuide}>
                            <div className={styles.primeira_secao_card_seguro_cuide}>
                                <div className={styles.container_titulo_card_seguro}>
                            <p className={styles.titulo_card_seguro}>Prata Nacional</p>
                            <p className={styles.datas_card_seguro}>16 dez. 2025 - 18 dez.2025</p>
                            </div>
                            <div className={styles.container_preco_card_seguro}>
                            <p className={styles.paragrafo_por_dia}>Preço por dia</p>
                            <p className={styles.paragrafo_preco}>R$ 0</p>
                            <p className={styles.paragrafo_preco_total}>Total: R$32</p>
                            </div>
                            <button className={styles.botao_selecionar_seguro}>Selecionar</button>
                        </div>
                        <div className={styles.segunda_secao_card_seguro_cuide_prata}>
                            <div className={styles.container_imagem_verificado_paragrafo}>
                            <img src="/images/verificado-verde.png" className={styles.icone_verificado}/>
                            <p className={styles.titulo_segunda_secao_card_seguro}>Cancelamento grátis</p>
                            </div>
                            <div className={styles.container_imagem_verificado_paragrafo}>
                            <img src="/images/verificado-verde.png" className={styles.icone_verificado}/>
                            <p className={styles.titulo_segunda_secao_card_seguro}>Despesas hospitalares de até BRL$ 30.000</p>
                            </div><div className={styles.container_imagem_verificado_paragrafo}>
                            <img src="/images/verificado-verde.png" className={styles.icone_verificado}/>
                            <p className={styles.titulo_segunda_secao_card_seguro}>Despesas farmacêuticas de até R$1.000</p>
                            </div>
                        </div>
                        <div className={styles.container_ver_mais_politica}>
                        <div className={styles.container_ver_mais}>
                        <p>Ver mais</p>
                        </div>
                        <div className={styles.container_politicas}>
                        <p>Ver políticas</p>
                        </div>
                        </div>
                        </div>
                        <div className={styles.card_seguro_cuide}>
                            <div className={styles.primeira_secao_card_seguro_cuide}>
                                <div className={styles.container_titulo_card_seguro}>
                            <p className={styles.titulo_card_seguro}>Ouro Nacional</p>
                            <p className={styles.datas_card_seguro}>16 dez. 2025 - 18 dez.2025</p>
                            </div>
                            <div className={styles.container_preco_card_seguro}>
                            <p className={styles.paragrafo_por_dia}>Preço por dia</p>
                            <p className={styles.paragrafo_preco}>R$ 12</p>
                            <p className={styles.paragrafo_preco_total}>Total: R$34</p>
                            </div>
                            <button className={styles.botao_selecionar_seguro}>Selecionar</button>
                        </div>
                        <div className={styles.segunda_secao_card_seguro_cuide_prata}>
                            <div className={styles.container_imagem_verificado_paragrafo}>
                            <img src="/images/verificado-verde.png" className={styles.icone_verificado}/>
                            <p className={styles.titulo_segunda_secao_card_seguro}>Cancelamento grátis</p>
                            </div>
                            <div className={styles.container_imagem_verificado_paragrafo}>
                            <img src="/images/verificado-verde.png" className={styles.icone_verificado}/>
                            <p className={styles.titulo_segunda_secao_card_seguro}>Despesas hospitalares de até BRL$ 50.000</p>
                            </div><div className={styles.container_imagem_verificado_paragrafo}>
                            <img src="/images/verificado-verde.png" className={styles.icone_verificado}/>
                            <p className={styles.titulo_segunda_secao_card_seguro}>Despesas farmacêuticas de até R$2.000</p>
                            </div>
                        </div>
                        <div className={styles.container_ver_mais_politica}>
                        <div className={styles.container_ver_mais}>
                        <p>Ver mais</p>
                        </div>
                        <div className={styles.container_politicas}>
                        <p>Ver políticas</p>
                        </div>
                        </div>
                        </div>
                    </div>
                    )}
                    
                </div>
                <div className={styles.card_email}>
                    <div className={styles.container_titulo_card_email_paragrafo}>
                    <h2 className={styles.titulo_card_email}>Para qual e-mail enviamos os vouchers?</h2>
                    <p className={styles.paragrafo_card_email}>Esse dado é essencial para que possamos enviar seus vouchers e informações importantes sobre sua viagem.</p>
                    </div>
                    <div className={styles.container_label_input}>
                    <label>E-MAIL</label>
                    <input type="text" className={styles.input_email} placeholder='Insira seu e-mail'/>
                    </div>
                    <div className={styles.container_label_input}>
                    <label>CONFIRME O SEU E-MAIL</label>
                    <input type="text" className={styles.input_email} placeholder='Insira seu e-mail'/>
                    </div>
                    <div className={styles.container_input_melhores_ofertas}>
                        
                        <input type="checkbox" className={styles.input_checkbox}/>
                        <div className={styles.container_titulo_paragrafo}>
                        <p className={styles.titulo_ofertas}>Quero receber as melhores ofertas!</p>
                        <p className={styles.paragrafo_email_ofertas}>Você vai receber e-mails e ligações com as melhores promoções para a sua viagem. Mas, se não quiser, é só desmarcar esta opção. Para mais informações, consulte nossas políticas de privacidade.

<br/>Para mais informações, consulte as <span className={styles.span_politicas}>políticas de privacidade</span></p>
</div>
                    </div>
                </div>
                <div className={styles.card_numero}>
                    <h2 className={styles.titulo_card_email}>Qual número podemos usar para entrar em contato com você?</h2>
                    <div className={styles.container_label_input}>
                    <label>TELEFONE</label>
                    <select className={styles.select_celular}>
                        <option>Celular</option>
                    </select>
                    </div>
                    <div className={styles.container_label_input}>
                    <label>CÓDIGO DO PAÍS</label>
                    <select className={styles.select_celular}>
                        <option>Celular</option>
                    </select>
                    </div>
                </div>

            </div>
            
        </div>
    )
}