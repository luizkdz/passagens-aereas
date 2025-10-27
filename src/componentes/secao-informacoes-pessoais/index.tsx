import { useState } from 'react';
import CardPlanejeViagem from '../card-planeje-viagem';
import FooterPrimeiraSecao from '../footer-primeira-secao';
import FooterSegundaSecao from '../footer-segunda-secao';
import Inscrever from '../secao-inscrever';
import FooterTerceiraSecao from '../terceira-secao-footer';
import styles from './secao-informacoes-pessoais.module.css';
import ReCAPTCHA from "react-google-recaptcha";

export default function SecaoInformacoesPessoais(){

    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const handleSubmit = (e:React.FormEvent) => {
         e.preventDefault();

    if (!captchaToken) {
      alert("Por favor, complete o captcha!");
      return;
    }
    }

    const [adicionarTelefone,setAdicionarTelefone] = useState(false);
    const [adicionarEmail, setAdicionarEmail] = useState(false);

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
                   
                    </div>
                <div className={styles.card_dados_pessoais}>
                    <p className={styles.titulo_dados_pessoais}>Dados pessoais</p>
                
                <div className={styles.container_label_input_cpf}>
                    <label className={styles.label_cpf_nome_sobrenome}>CPF</label>
                    <input className={styles.input_cpf_nome_sobrenome} type="number" placeholder="Insira apenas números"/>
                </div>
                <div className={styles.container_card_dados_pessoais}>
                <div className={styles.container_label_input_cpf}>
                    <label className={styles.label_cpf_nome_sobrenome}>Nome</label>
                    <input className={styles.input_cpf_nome_sobrenome} type="text" placeholder=""/>
                </div>
                <div className={styles.container_label_input_cpf}>
                    <label className={styles.label_cpf_nome_sobrenome}>Sobrenome</label>
                    <input className={styles.input_cpf_nome_sobrenome} type="number" placeholder="Insira apenas números"/>
                </div>
                <div className={styles.container_label_input_cpf}>
                    <label className={styles.label_cpf_nome_sobrenome}>Data de nascimento</label>
                    <div className={styles.container_selects_data}>
                    <select className={styles.select_data}>
                        <option>Dia</option>
                    </select>
                    <select className={styles.select_data}>
                        <option>Mês</option>
                    </select>
                    <select className={styles.select_data}>
                        <option>Ano</option>
                    </select>
                    </div>
                </div>
                <div className={styles.container_label_input_cpf}>
                    <label className={styles.label_cpf_nome_sobrenome}>Sexo</label>
                    <div className={styles.container_sexo}>
                    <div className={styles.container_input_sexo}>
                        <input className={styles.input_sexo} type="radio"/>
                        <p>Feminino</p>
                    </div>
                    <div className={styles.container_input_sexo}>
                        <input className={styles.input_sexo} type="radio"/>
                        <p>Masculino</p>
                    </div>
                    </div>
                </div>
                <button className={styles.botao_salvar}>Salvar</button>
                </div>
                
                </div> 
                <div className={styles.card_telefone}>
                    <p className={styles.titulo_telefone}>Telefone</p>
                <p className={styles.descricao_telefone}>Insira os seus telefones para que possamos entrar em contato caso ocorra alguma alteração.</p>
                </div>
                <div className={styles.card_insira_telefone}>
                    <div onClick = {() => {setAdicionarTelefone(true)}} className={styles.container_adicionar_telefone}>
                    <div className={styles.container_imagem_paragrafo_insira}>
                    <img src="/images/mais.png" className={styles.icone_mais}/>
                    <p className={styles.texto_descricao_card_insira_telefone}>Insira telefone</p>
                    </div>
                    {adicionarTelefone && (
                        <div>
                        <div className={styles.container_insira_telefone}>
                    <div className={styles.container_label_select}>
                        <label className={styles.label_pais_area_numero}>País</label>
                        <select className={styles.select_pais}>
                            <option>Brasil</option>
                        </select>
                    </div>
                    <div className={styles.container_label_area_numero}>
                        <label className={styles.label_pais_area_numero}>Área</label>
                        <input className={styles.input_area} type="number"/>
                    </div>
                     <div className={styles.container_label_area_numero}>
                        <label className={styles.label_pais_area_numero}>Número</label>
                        <input className={styles.input_numero} type="number"/>
                    </div>
                     
                    </div>
                    <div className={styles.container_recaptcha}><ReCAPTCHA
                                  sitekey="6LePtPUrAAAAADmyWR8LUeg8rbrMiPOlE319D5qx"
                                  onChange={(token) => setCaptchaToken(token)}
                                />
                    </div>
                    <div className={styles.container_botao_adicionar_cancelar}>
                        <button className={styles.botao_adicionar_telefone}>Adicionar</button>
                        <button onClick={(e) => {e.stopPropagation();setAdicionarTelefone(false)}} className={styles.botao_cancelar_adicionar_telefone}>Cancelar</button>
                    </div>
                    </div>)}
                    </div>
                </div>
                <div className={styles.card_emails}>
                    <p className={styles.titulo_emails}>Emails</p>
                <p className={styles.descricao_emails}>Insira os seus telefones para que possamos entrar em contato caso ocorra alguma alteração.</p>
                <div className={styles.container_imagem_email_texto_verificado_principal}>
                    <div className={styles.container_icone_email}>
                        <img src="/images/email-icone.png" className={styles.icone_imagem_email}/>
                    </div>
                    <p className={styles.texto_email}>luizgrfc12@gmail.com</p>
                    <img src="/images/verificado-cinza.png" className={styles.icone_imagem_email}/>
                    <p className={styles.texto_verificado}>Verificado</p>
                    <img src="/images/estrela-cinza.png" className={styles.icone_imagem_email}/>
                    <p className={styles.texto_principal}>Principal</p>
                    </div>
                </div>
                <div className={styles.card_insira_email}>
                    <div onClick={() => {setAdicionarEmail(true)}} className={styles.container_botao_inserir_container_adicionar_email}>
                    <div className={styles.container_imagem_texto_descricao_card_insira_email}>
                    <img src="/images/mais.png" className={styles.icone_mais}/>
                    <p className={styles.texto_descricao_card_insira_email}>Insira e-mail</p>
                    </div>
                    {adicionarEmail && (
                        <div className={styles.container_adicionar_email}>
                            <div className={styles.card_adicionar_email}>
                                <div className={styles.container_imagem_paragrafo_adicionar_email}>
                                <img src="/images/informacoes-branco.png" className={styles.icone_informacoes}/>
                                <p>Se você adicionar um e-mail, ele ficará associado à sua conta. Não será possível remover o e-mail depois, pois você faz parte do programa Passaporte SKYPASS.</p>
                            </div>
                            <div className={styles.container_label_input_email}>
                                <label className={styles.label_email}>E-mail</label>
                                <input placeholder="meunome@exemplo.com" className={styles.input_email}/>
                            </div>
                            <div className={styles.container_recaptcha}><ReCAPTCHA
                                  sitekey="6LePtPUrAAAAADmyWR8LUeg8rbrMiPOlE319D5qx"
                                  onChange={(token) => setCaptchaToken(token)}
                                />
                    </div>
                    <div className={styles.container_botao_adicionar_cancelar}>
                        <button className={styles.botao_adicionar_telefone}>Adicionar</button>
                        <button onClick={(e) => {e.stopPropagation();setAdicionarEmail(false)}} className={styles.botao_cancelar_adicionar_telefone}>Cancelar</button>
                    </div>
                            </div>
                        </div>
                    )}
                    </div>
                </div>
                <div className={styles.card_baixe_seus_dados}>
                    <p className={styles.titulo_baixe}>Baixe seus dados</p>
                    <p className={styles.descricao_baixe}>Todos os seus dados pessoais em um documento PDF.</p>
                    <button className={styles.botao_baixar}>Baixar documento</button>
                </div>
                
                </div>
                <div className={styles.container_card_planeje}>
                <CardPlanejeViagem/>
                </div>
            </div>
            <Inscrever/>
            <FooterPrimeiraSecao/>
            <FooterSegundaSecao/>
            <FooterTerceiraSecao/>
        </div>
    )
}