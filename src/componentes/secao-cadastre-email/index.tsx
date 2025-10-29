import styles from './secao-cadastre-email.module.css';
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
export default function SecaoCadastreEmail(){

     const [step, setStep] = useState(1);

      const handleNext = () => {
    setStep(2);
  }; 
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const handleSubmit = (e:React.FormEvent) => {
         e.preventDefault();

    if (!captchaToken) {
      alert("Por favor, complete o captcha!");
      return;
    }
    }
    return (
        <div className={styles.secao_cadastre_email}>
            <div className={step === 1 ? styles.card_cadastre_email : step === 2 ? styles.card_cadastre_email_step_2 : styles.card_cadastre_email_step_3}>
                {step === 1 || step === 2 && (<div className={styles.container_inicie_sessao}>
                <p className={styles.texto_inicie_sessao}>Inicie sessão</p>
                <img src="/images/seta-para-a-direita-rosa.png" className={styles.icone_seta_direita}/>
                <p className={styles.texto_criar_uma_conta}>Criar uma conta</p>
                </div>)}
                {step === 1 || step === 2 && <p className={styles.titulo_crie_conta}>Crie sua conta</p>}
                <form onSubmit={handleSubmit}>
                {step === 1 && <div className={styles.container_email_recaptcha}>
                <div className={styles.container_label_input_email}>
                    <label className={styles.label_email}>E-MAIL</label>
                    <input type="email" placeholder="meunome@exemplo.com" className={styles.input_email}/>
                    <img src="/images/email-icone.png" className={styles.icone_email}/>
                </div>
            
            <div className={styles.container_recaptcha}>
            <ReCAPTCHA
              sitekey="6LePtPUrAAAAADmyWR8LUeg8rbrMiPOlE319D5qx"
              onChange={(token) => setCaptchaToken(token)}
            />
          </div> 
         
          <div className={styles.container_botao_seguinte}>
            <button onClick={() => {handleNext}} className={styles.botao_seguinte}>Seguinte</button>
          </div>
          </div>}
          {step === 2 && (
            <div>
                <div className={styles.container_label_input_email}>
                    <label className={styles.label_email}>E-MAIL</label>
                    <input type="email" placeholder="meunome@exemplo.com" className={styles.input_email}/>
                    <img src="/images/email-icone.png" className={styles.icone_email}/>
                </div>
                <div className={styles.container_label_input_senha}>
                    <label className={styles.label_email}>SENHA</label>
                    <input type="text" placeholder="Exemplo123$" className={styles.input_senha}/>
                    <p className={styles.texto_exibir_senha}>EXIBIR</p>
                </div>
                <div className={styles.container_validacoes_senha}>
                    <div className={styles.container_imagem_verificado_senha}>
                        <img src="/images/verificado.png" className={styles.icone_verificado_senha}/>
                        <p className={styles.texto_senha}>8 caracteres</p>
                    </div>
                    <div className={styles.container_imagem_verificado_senha}>
                        <img src="/images/verificado.png" className={styles.icone_verificado_senha}/>
                        <p className={styles.texto_senha}>8 caracteres</p>
                    </div>
                    <div className={styles.container_imagem_verificado_senha}>
                        <img src="/images/verificado.png" className={styles.icone_verificado_senha}/>
                        <p className={styles.texto_senha}>8 caracteres</p>
                    </div>
                    <div className={styles.container_imagem_verificado_senha}>
                        <img src="/images/verificado.png" className={styles.icone_verificado_senha}/>
                        <p className={styles.texto_senha}>8 caracteres</p>
                    </div>
                    <div className={styles.container_imagem_verificado_senha}>
                        <img src="/images/verificado.png" className={styles.icone_verificado_senha}/>
                        <p className={styles.texto_senha}>8 caracteres</p>
                    </div>
                    
                </div>
                <div className={styles.container_concorda_politicas}>
                    <p className={styles.texto_concorda}>Ao criar uma conta, você aceita:<br/>Nossa <span className={styles.span_politica}><a href="#">política de privacidade</a></span>.<br/>*Receber ofertas e recomendações por e-mail</p>
                </div>
                <div className={styles.container_botao_criar_conta}>
                    <button onClick={() => {handleNext}} className={styles.botao_seguinte}>Criar conta</button>
                </div>
            </div>
          )}
          {step === 3 && (<div>
            <p className={styles.titulo_crie_conta}>Ótimo! Você está a apenas um passo...</p>
            <div className={styles.container_imagem_email}>
                <img src="/images/e-mail.png" className={styles.icone_email_enviado}/>
            </div>
            <p className={styles.texto_email}>Enviamos um e-mail a blabla@hotmail.com para que você valide sua conta.Se o e-mail não aparecer, confira sua pasta de spam.</p>
            <div className={styles.container_botao_acessar_email}>
            <button className={styles.botao_acessar_email}>Acessar seu e-mail</button>
            </div>
          </div>)}
                </form>
            </div>
        </div>
    )
}