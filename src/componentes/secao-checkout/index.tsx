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
const [mostrarTelefone, setMostrarTelefone] = useState(1);
const [mostrarTodosMeiosPagamentos, setMostrarTodosMeiosPagamentos] = useState(false);
const handleMostrarTelefone = () => {
    if(mostrarTelefone < 4)
    setMostrarTelefone((inicial => (inicial + 1)));
}

const handleRemoverTelefone = () => {
    if(mostrarTelefone > 1)
    setMostrarTelefone((inicial => (inicial - 1)));
}

const handleChange = (option: SingleValue<OptionType>) => {
    setSelectedOption(option);
 
  };

  const [mostrarModalPrecoTransfer, setMostrarModalPrecoTransfer] = useState(false);

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
                        <button onClick={() => {setMostrarModalPrecoTransfer(true)}} className={styles.botao_preco}>Calcular o preço</button>
                        {mostrarModalPrecoTransfer && (<div className={styles.overlay}>
                      <div className={styles.modal}>
                        <div className={styles.container_botao_fechar}>
                          <img onClick={() => {setMostrarModalPrecoTransfer(false)}} src="/images/x-preto.png" className={styles.imagem_botao_fechar}/>
                        </div>
                        <div className={styles.card_modal}>
                            <p>Insira o nome da hospedagem</p>
                            <p>Assim poderemos encontrar a melhor opção para o seu transfer de ida e volta.</p>
                            <div className={styles.container_aeroporto_hospedagem}>
                            <div className={styles.container_aviao_hospedagem}>
                                <img src="/images/aviao_modal_transfer.png" className={styles.imagem_aviao_hospedagem}/>
                                <div className={styles.container_texto_aeroporto_modal}>
                                <p>AEROPORTO</p>
                                <p>Aeroporto Internacional Galeão Antonio Carlos Jobim, Rio de Janeiro</p>
                                </div>
                                </div>
                                <div className={styles.container_hospedagem_modal}>
                                    <div className={styles.container_imagem_hospedagem}>
                                    <img src="/images/estrela-hospedagem.png" className={styles.imagem_estrela_hospedagem}/>
                                    <p>HOSPEDAGEM</p>
                                    </div>
                                    <input placeholder="Nome da hospedagem" type="text" className={styles.input_hospedagem}/>

                                </div>
                                </div>
                                <div className={styles.container_botoes_hospedagem}>
                                    <button className={styles.botao_nao_tenho_hospedagem_modal_transfer}>Não tenho hospedagem</button>
                                    <button className={styles.botao_calcular_preco_modal_transfer}>Calcular o preço</button>
                                </div>
                            
                        </div>
                        </div>
                        </div>)}
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
                    
                    <div>
                    <div className={styles.container_label_input}>
                    <label>TELEFONE</label>
                    <select className={styles.select_celular}>
                        <option>Celular</option>
                    </select>
                    </div>
                    <div className={styles.container_label_input}>
                    <label>CÓDIGO DO PAÍS</label>
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
    <div className={styles.container_area_numero}>
    <div className={styles.container_label_input}>
                    <label>ÁREA</label>
                    <input type="text" className={styles.input_area_celular}/>
                    </div>
                    <div className={styles.container_label_input}>
    <label>NÚMERO</label>
    <input type="number" placeholder='Coloque seu número' className={styles.input_numero}/>
    </div>
                    </div>
                    </div>
                    </div>
                    
                    {mostrarTelefone && (
                        <div>
                            {Array.from({length: mostrarTelefone - 1}).map((item,index) => {
                                return (
                                    <div>
                    <div className={styles.container_label_input}>
                    <label>TELEFONE {index + 2}</label>
                    <select className={styles.select_celular}>
                        <option>Celular</option>
                    </select>
                    </div>
                    <div className={styles.container_label_input}>
                    <label>CÓDIGO DO PAÍS</label>
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
    <div className={styles.container_area_numero}>
    <div className={styles.container_label_input}>
                    <label>ÁREA</label>
                    <input type="text" className={styles.input_area_celular}/>
                    </div>
                    <div className={styles.container_label_input}>
    <label>NÚMERO</label>
    <input type="number" placeholder='Coloque seu número' className={styles.input_numero}/>
    </div>
                    </div>
                    </div>
                    </div>
                                )
                            })}
                        </div>
                    )}
                    <div  className={mostrarTelefone < 4 ? styles.container_imagem_incluir_telefone : styles.container_imagem_incluir_telefone_off}>
                        <div onClick={() => {handleMostrarTelefone()}} className={mostrarTelefone < 4 ? styles.container_imagem_mais_incluir : styles.container_imagem_mais_incluir_off}>
                        <img src="/images/mais.png" className={styles.imagem_mais}/>
                        <p>Incluir outro telefone</p>
                        </div>
                        <div onClick={() => {handleRemoverTelefone()}} className={mostrarTelefone > 1 ? styles.container_imagem_lixeira_remover:styles.container_imagem_lixeira_remover_off}>
                        <img src="/images/lixeira.png" className={styles.imagem_lixeira}/>
                        <p>Remover</p>
                        </div>
                    </div>
                    <div className={styles.container_input_alerta_detalhes}>
                        <input type="checkbox" className={styles.input_checkbox}/>
                        <p className={styles.paragrafo_alerta_detalhes}>Quero receber detalhes da minha compra, estado do voo e possíveis alterações da minha reserva por WhatsApp ou SMS</p>
                    </div>
                    
                </div>
                <div className={styles.card_como_quer_pagar}>
                    <h2 className={styles.titulo_como_quer_pagar}>Como você quer pagar</h2>
                    <p className={styles.texto_mais_usados}>Mais usados</p>
                    <div className={styles.card_meios_de_pagamento}>
                        <div className={styles.container_meio_de_pagamento}>
                            <input type="radio" className={styles.input_radio_pagamento}/>
                            <p className={styles.paragrafo_meio_de_pagamento}>Cartão de crédito</p>
                            <span className={styles.span_melhor_preco}>Até 20% OFF</span>
                        </div>
                        <div className={styles.container_meio_de_pagamento}>
                            <input type="radio" className={styles.input_radio_pagamento}/>
                            <p className={styles.paragrafo_meio_de_pagamento}>Pix</p>
                            <span className={styles.span_melhor_preco}>Até 4% OFF</span>
                        </div>
                        <div className={styles.container_meio_de_pagamento}>
                            <input type="radio" className={styles.input_radio_pagamento}/>
                            <p className={styles.paragrafo_meio_de_pagamento}>Koin(Boleto Parcelado)</p>
                            <span className={styles.span_melhor_preco}>Até R$70 de cashback</span>
                        </div>
                        <div className={styles.container_meio_de_pagamento}>
                            <input type="radio" className={styles.input_radio_pagamento}/>
                            <p className={styles.paragrafo_meio_de_pagamento}>2 cartões (débito e/ou crédito combinados)</p>
                            <span className={styles.span_melhor_preco}>Até 19% OFF</span>
                        </div>
                    {mostrarTodosMeiosPagamentos && (
                        <div>
                            <div className={styles.container_meio_de_pagamento}>
                            <input type="radio" className={styles.input_radio_pagamento}/>
                            <p className={styles.paragrafo_meio_de_pagamento}>Cartão de débito</p>
                            <span className={styles.span_melhor_preco}>Até 19% OFF</span>
                        </div>
                        <div className={styles.container_meio_de_pagamento}>
                            <input type="radio" className={styles.input_radio_pagamento}/>
                            <p className={styles.paragrafo_meio_de_pagamento}>Pagamento em dinheiro</p>
                            <span className={styles.span_melhor_preco}>Até 19% OFF</span>
                        </div>
                        </div>
                    )}
                    </div>
                    <button onClick={() => {setMostrarTodosMeiosPagamentos(!mostrarTodosMeiosPagamentos)}}className={styles.botao_ver_todos}> {!mostrarTodosMeiosPagamentos ? "Ver todos" : "Ver menos"} <img src="/images/drop-down.png" className={styles.icone_drop_down}/></button>
                    <div className={styles.container_cupom}>
                    <p className={styles.paragrafo_cupom}>Você tem um cupom?</p><span className={styles.span_cupom}>Ative seu cupom aqui</span>
                    </div>
                </div>
                <div className={styles.card_nota_fiscal}>
                    <h2 className={styles.titulo_nota_fiscal}>Em nome de quem emitimos a nota fiscal?</h2>
                    <div className={styles.container_situacao_fiscal}>
                        <label className={styles.label_situacao_fiscal}>SITUAÇÃO FISCAL</label>
                        <select className={styles.select_situacao_fiscal}>
                            <option>Pessoa Física</option>
                            <option>Pessoa Jurídica</option>
                        </select>
                        <div className={styles.container_input_contribuinte_estrangeiro}>
                            <input type="checkbox" className={styles.input_checkbox}/>
                            <p>Contribuinte estrangeiro</p>
                        </div>
                        <div className={styles.container_label_input}>
                    <label>NOME COMPLETO</label>
                    <input type="text" className={styles.input_nome} placeholder='Como está no documento'/>
                    </div>
                    <div className={styles.container_cpf_cep}>
                    <div className={styles.container_label_input}>
                    <label>CPF</label>
                    <input type="text" className={styles.input_cpf} placeholder='Como está no documento'/>
                    </div>
                    <div className={styles.container_label_input}>
                    <label>CEP</label>
                    <input type="text" className={styles.input_cep} placeholder='Ex.:54789218390'/>
                    </div>
                    </div>
                    </div>
                </div>
                <div className={styles.card_verificar_dados}>
                    <h2 className={styles.titulo_card_verificar_dados}>Antes de finalizar verifique os dados informados</h2>
                    <div className={styles.container_imagem_calendario_data}>
                        <img src="/images/calendario_verifique.png" className={styles.icone_calendario}/>
                        <p>Data</p>
                        </div>
                        <div className={styles.container_ida_volta}>
                        <p>Ida: terca-feira 16 dez. 2025, 6:15</p>
                        <p>Volta: terca-feira 16 dez. 2025, 13:15</p>
                        </div>
                    
                    <div className={styles.container_imagem_quem_viaja}>
                        <img src="/images/usuarios.png" className={styles.icone_usuario}/>
                        <p>Quem viaja?</p>
                    </div>
                    <div className={styles.container_nome_sobrenome}>
                        <p>Nome:</p>
                        <p>Último sobrenome:</p>
                    </div>
                </div>
                <div className={styles.container_input_li_e_aceito_condicoes}>
                    <input type="checkbox" className={styles.input_checkbox}/>
                    <p className={styles.paragrafo_li_e_aceito}>Li e aceito as <span className={styles.span_politicas_aceito}>condições de compra</span> , <span className={styles.span_politicas_aceito}>política de privacidade</span> e <span className={styles.span_politicas_aceito}>política de alterações e cancelamentos</span>.</p>
                </div>
                <div className={styles.container_botao_comprar}>
                    <button className={styles.botao_comprar_laranja}>Comprar</button>
                </div>
                <div className={styles.container_compre_e_ganhe_cupom}>
                    <img src="/images/presente.png" className={styles.imagem_presente}/>
                    <p className={styles.paragrafo_presente}>Compre e ganhe um cupom de até 30% OFF em produtos selecionados</p>
                </div>

            </div>
            <div className={styles.container_detalhes_pagamento}>
                <p className={styles.titulo_detalhe_pagamento}>Detalhe do pagamento</p>
                <div className={styles.container_passaporte_skypass}>
                    <img src="/images/passaporte-rosa.png" className={styles.icone_passaporte}/>
                    <div className={styles.container_texto_passaporte_pontos}>
                    <p className={styles.texto_pontos_passaporte}>Passaporte SkyPass</p>
                    <div className={styles.container_texto_acumular_seta}>
                    <p className={styles.texto_pontos_ganhos}>Você poderia acumular 8 pontos</p>
                    <img src="/images/seta-para-a-direita-rosa.png" className={styles.icone_seta_direita}/>
                    </div>
                    </div>
                </div>
                <div className={styles.card_voo}>
                    <div className={styles.container_voo_preco_impostos}>
                    <div className={styles.container_voo_preco}>
                        <p>Voo para 1 pessoa</p>
                        <p>R$ 351</p>
                    </div>
                    <div className={styles.container_voo_preco}>
                        <p>Impostos e taxas</p>
                        <p>R$ 135</p>
                    </div>
                    </div>
                    <div className={styles.container_total}>
                        <p>TOTAL</p>
                        <p>R$ <span className={styles.span_preco_total}>486</span></p>
                    </div>

                </div>
                <div className={styles.container_titulo_detalhe_da_compra}>
                <p>Detalhe da compra</p>
                </div>
                <div className={styles.card_detalhe_da_compra}>
                    <img src="/images/aviao-ida.png" className={styles.icone_aviao}/>
                    <p className={styles.texto_cidade_ida_e_volta}>São Paulo - Rio de Janeiro</p>
                    <p className={styles.texto_descricao_ida_volta_adulto}>Ida e volta, 1 adulto</p>
                    <div className={styles.container_detalhes_ida}>
                    <p>IDA</p>
                    <p>Ter.16 dez. 2025</p>
                    <div className={styles.container_companhia_informacoes}>
                        <div className={styles.container_icone_companhia_nome}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MduLD3BMOnAFv0qjmgI4qvei89O9CqiWmg&s" className={styles.icone_companhia}/>
                            <p>Gol</p>
                    </div>
                    <img src="/images/informacoes.png" className={styles.icone_informacoes}/>
                    </div>
                    <div className={styles.container_horario_voo_ida}>
                        <div className={styles.container_codigo_horario_voo}>
                            <p className={styles.texto_codigo_voo}>CGH</p>
                            <p className={styles.texto_horario_voo}>06:15</p>
                        </div>
                        <p className={styles.texto_direto}>Direto</p>
                        <div className={styles.container_codigo_horario_voo}>
                            <p className={styles.texto_codigo_voo}>GIG</p>
                            <p className={styles.texto_horario_voo}>07:20</p>
                        </div>
                        <div className={styles.container_duracao_hora}>
                            <p className={styles.texto_duracao}>Duração</p>
                            <p className={styles.texto_tempo_duracao_voo}>1h 5m</p>
                        </div>
                    </div>
                    <div className={styles.container_imagem_bagagens}>
                        <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                        <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                        <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    </div>
                    <div className={styles.container_detalhes_volta}>
                    <p>VOLTA</p>
                    <p>Ter.16 dez. 2025</p>
                    <div className={styles.container_companhia_informacoes}>
                        <div className={styles.container_icone_companhia_nome}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1MduLD3BMOnAFv0qjmgI4qvei89O9CqiWmg&s" className={styles.icone_companhia}/>
                            <p>Gol</p>
                    </div>
                    <img src="/images/informacoes.png" className={styles.icone_informacoes}/>
                    </div>
                    <div className={styles.container_horario_voo_ida}>
                        <div className={styles.container_codigo_horario_voo}>
                            <p className={styles.texto_codigo_voo}>CGH</p>
                            <p className={styles.texto_horario_voo}>06:15</p>
                        </div>
                        <p className={styles.texto_direto}>Direto</p>
                        <div className={styles.container_codigo_horario_voo}>
                            <p className={styles.texto_codigo_voo}>GIG</p>
                            <p className={styles.texto_horario_voo}>07:20</p>
                        </div>
                        <div className={styles.container_duracao_hora}>
                            <p className={styles.texto_duracao}>Duração</p>
                            <p className={styles.texto_tempo_duracao_voo}>1h 5m</p>
                        </div>
                    </div>
                    <div className={styles.container_imagem_bagagens}>
                        <img src="/images/bagagem.png" className={styles.icone_bagagem}/>
                        <img src="/images/bagagem-mao.png" className={styles.icone_bagagem}/>
                        <img src="/images/bagagem-despacho.png" className={styles.icone_bagagem}/>
                    </div>
                    </div>
                    <div className={styles.container_politicas_e_cancelamentos}>
                        <p className={styles.titulo_politicas}>Políticas de alterações e cancelamentos</p>
                        <div className={styles.container_alteracoes_cancelamentos}>
                            <p className={styles.titulo_alteracoes_cancelamento}>Alterações</p>
                            <div className={styles.container_imagem_alteracoes_texto}>
                                <img src="/images/verificado-verde.png" className={styles.icone_verificado}/>
                                <p>Permite (com custo)</p>
                            </div>
                        </div>
                        <div className={styles.container_cancelamento}>
                            <p className={styles.titulo_alteracoes_cancelamento}>Cancelamento</p>
                            <div className={styles.container_imagem_cancelamento_texto}>
                                <img src="/images/x-preto.png" className={styles.icone_cancelamento}/>
                                <p className={styles.descricao_reembolsavel}>Não reembolsável *</p>
                            </div>
                        </div>
                        <div className={styles.container_texto_cancelamento}>
                            <p className={styles.texto_cancelamento}>*Caso o cancelamento seja solicitado 24h após a realização da compra e ao menos 7 dias antes da data do embarque, o reembolso será integral conforme Resoluções da SKYPASS.</p>
                        </div>
                        <div className={styles.container_ver_politicas_e_cancelamentos}>
                            <p className={styles.texto_politicas}>Ver políticas de alterações e cancelamentos</p>
                        </div>
                    </div>
                    
                                    </div>
                                    <div className={styles.card_politicas_alteracoes}>
                                        <div className={styles.container_icone_titulo_politicas}>
                                            <img src="/images/informacoes-branco.png" className={styles.icone_informacoes}/>
                                            <p>Ver políticas de alterações e cancelamentos</p>
                                        </div>
                                        <button className={styles.botao_ver_condicoes}>Ver condições</button>
                                    </div>
            </div>
        </div>
    )
}