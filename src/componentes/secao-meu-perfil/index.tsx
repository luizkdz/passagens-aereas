import CardPlanejeViagem from '../card-planeje-viagem';
import styles from './secao-meu-perfil.module.css';

export default function SecaoMeuPerfil(){
    return (
        <div className={styles.secao_meu_perfil}>
            <div className={styles.container_titulo_meu_perfil}>
                <p className={styles.titulo_meu_perfil}>Meu Perfil</p>
            </div>
            <div className={styles.secao_informacoes_perfil}>
                <div className={styles.container_informacoes_perfil}>
                 <div className={styles.card_perfil_dados}>
                    <div className={styles.container_imagem_nome_email}>
                        <img src="/images/aviao.png" className={styles.icone_imagem}/>
                        <div className={styles.container_texto_nome_email}>
                            <p>Luiz Gustavo</p>
                            <p>luizgrfc12@gmail.com<img src="/images/verificado-branco.png" className={styles.icone_verificado}/></p>
                        </div>
                    </div>
                    <button className={styles.botao_editar}>Editar</button>
                    </div>
                    <div className={styles.container_informacoes}>
                        <div className={styles.container_imagem_dados_pessoais}>
  <div className={styles.container_icone_email}>
    <img src="/images/usuario-roxo.png" className={styles.icone_imagem_email} />
  </div>
  <div className={styles.container_titulo_dados_pessoais_nome}>
    <p className={styles.texto_titulo_dados}>DADOS PESSOAIS</p>
    <p className={styles.texto_nome}>Luiz Gustavo</p>
  </div>
</div>
                        <div className={styles.container_imagem_dados_pessoais}>
  <div className={styles.container_icone_email}>
    <img src="/images/telefone.png" className={styles.icone_imagem_email} />
  </div>
  <div className={styles.container_titulo_dados_pessoais_nome}>
    <p className={styles.texto_titulo_dados_telefone}>TELEFONE</p>
    <p className={styles.texto_telefone}>Insira telefone</p>
  </div>
</div>
                        <div className={styles.container_imagem_dados_pessoais}>
  <div className={styles.container_icone_email}>
    <img src="/images/email-icone.png" className={styles.icone_imagem_email} />
  </div>
  <div className={styles.container_titulo_dados_pessoais_nome}>
    <p className={styles.texto_titulo_dados_email}>E-MAILS</p>
    <p className={styles.texto_email}>luizgrfc12@gmail.com</p>
  </div>
</div>
                        </div>
                <div className={styles.container_cartoes_faturamento}>
                    <div className={styles.card_cartoes}><p className={styles.titulo_cartoes}>Cartões de crédito</p>
                    <div className={styles.container_imagem_adicionar_cartao}>
                        <img src="/images/cartao-de-debito.png" className={styles.icone_cartao}/>
                        <p className={styles.texto_guarde_cartoes}>Guarde de forma segura os dados do seu cartão e <span className={styles.span_agilize}>agilize o pagamento da sua próxima compra</span></p>
                        <button className={styles.botao_adicionar_cartao_faturamento}>Adicionar</button>
                    </div>
                </div>
                <div className={styles.card_cartoes}><p className={styles.titulo_faturamento}>Faturamento</p>
                    <div className={styles.container_imagem_adicionar_cartao}>
                        <img src="/images/fatura.png" className={styles.icone_cartao}/>
                        <p className={styles.texto_guarde_cartoes}>Complete os seus dados de faturamento e <span className={styles.span_agilize}>agilize o pagamento da sua próxima viagem</span></p>
                        <button className={styles.botao_adicionar_cartao_faturamento}>Adicionar</button>
                    </div>
                </div>
                </div>
                <div className={styles.container_card_passageiros_notificacoes}>
                    <div className={styles.card_passageiros}>
                        <p className={styles.titulo_passageiros}>Passageiros</p>
                        <div className={styles.container_imagem_adicionar_passageiros}>
                        <img src="/images/mochila.png" className={styles.icone_cartao}/>
                        <p className={styles.texto_guarde_cartoes}>Complete seus dados e quem costuma viajar com você para agilizar suas próximas compras</p>
                        <button className={styles.botao_adicionar_cartao_faturamento}>Adicionar</button>
                    </div>
                    </div>
                    <div className={styles.card_passageiros}>
                        <p className={styles.titulo_notificacoes}>Notificações sobre alterações</p>
                        <div className={styles.container_whatsapp_switch}>
                            <p className={styles.titulo_verificado_whatsapp}>WhatsApp</p>
                            <p>switch</p>
                        </div>
                        <p className={styles.texto_verificado_whatsapp}>Você deve ter um telefone verificado com WhatsApp para usar esta função</p>
                    </div>
                </div>
                <div className={styles.container_secoes_ativas_privacidade}>
                    <div className={styles.card_secoes_ativas}>
                        <p className={styles.titulo_secoes_ativas}>Seções ativas</p>
                        <p className={styles.descricao_secoes_ativas}>Gerencie suas sessões ativas em diferentes dispositivos</p>
                        <div className={styles.container_imagem_sessao_ativa}>
                            <div className={styles.container_icone_email}>
                                <img src="/images/celular-pequeno-roxo.png" className={styles.icone_telefone}/>
                            </div>
                        <div className={styles.container_texto_secoes_ativas}>
                            <p className={styles.dispositivo_sessao_ativa}>Chrome 14 - Windows 10</p>
                            <p className={styles.texto_ultimo_acesso}>Último acesso - 27 oct 2025</p>
                        </div>
                        </div>
                        <p className={styles.paragrafo_ver_todas}>Ver todas(1)</p>
                        
                    </div>
                    <div className={styles.card_privacidade_seguranca}>
                        <p className={styles.titulo_privacidade_seguranca}>Privacidade e segurança</p>
                        <div className={styles.container_texto_alertas}>
                            <p className={styles.texto_alertas_eliminar_conta}>Alertas</p>
                            <div className={styles.container_descricao_alerta_imagem_seta_direita}>
                                <p className={styles.descricao_alertas_eliminar_conta}>Selecione os tipos de e-mails e alertas que você deseja receber.</p>
                                <img src="/images/seta-para-a-direita-preta.png" className={styles.icone_seta_direita}/>
                            </div>
                        </div>
                        <div className={styles.container_texto_eliminar_conta}>
                            <p className={styles.texto_alertas_eliminar_conta}>Eliminar minha conta</p>
                            <div className={styles.container_descricao_alerta_imagem_seta_direita}>
                                <p className={styles.descricao_alertas_eliminar_conta}>Se você eliminar a sua conta, não será possível recuperá-la depois.</p>
                                <img src="/images/seta-para-a-direita-preta.png" className={styles.icone_seta_direita}/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className={styles.container_card_planeje}>
                <CardPlanejeViagem/>
                </div>
            </div>
        </div>
    )
}