import styles from './secao-cadastre.module.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
export default function SecaoCadastre(){

     const handleSuccessGoogle = (credentialResponse: any) => {
        const token = credentialResponse.credential;
        const userInfo: any = jwtDecode(token);
    
        console.log('Usuário Google:', userInfo);
    
        // 🔹 Envie o token para o backend
        fetch('http://localhost:3000/auth/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });
      };
    return (
        <div className={styles.secao_cadastre}>
            <div className={styles.card_cadastre}>
                <div className={styles.container_inicie_sessao}>
                <p className={styles.texto_inicie_sessao}>Inicie sessão</p>
                <img src="/images/seta-para-a-direita-rosa.png" className={styles.icone_seta_direita}/>
                <p className={styles.texto_criar_uma_conta}>Criar uma conta</p>
                </div>
                <p className={styles.titulo_crie_conta}>Crie sua conta</p>
                <div className={styles.container_botoes}>
                <GoogleOAuthProvider clientId="SEU_CLIENT_ID_DO_GOOGLE">
                    <GoogleLogin
                        onSuccess={handleSuccessGoogle}
                        onError={() => console.log('Erro ao logar com Google')}
                    />
                    </GoogleOAuthProvider>
                <button className={styles.botao_inscrever}><img src="/images/email-icone.png" className={styles.icone_email_acesso_botao}/>Inscreva-se com um e-mail</button>
                </div>
            </div>
        </div>
    )
}