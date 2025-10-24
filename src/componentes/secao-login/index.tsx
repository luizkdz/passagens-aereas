import styles from './secao-login.module.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { FacebookProvider} from "@kazion/react-facebook-login";
import FacebookLogin from "@kazion/react-facebook-login"
export default function SecaoLogin(){


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
        <div className={styles.secao_login}>
            <div className={styles.card_login}>
                <p className={styles.titulo_bem_vindo}>Bem vindo à sua <br/>próxima viagem</p>
                <div className={styles.container_botoes}>
                <GoogleOAuthProvider clientId="SEU_CLIENT_ID_DO_GOOGLE">
                    <GoogleLogin
                        onSuccess={handleSuccessGoogle}
                        onError={() => console.log('Erro ao logar com Google')}
                    />
                    </GoogleOAuthProvider>
                    
                <button className={styles.botao_acesse_com_seu_email}><img src="/images/email-icone.png" className={styles.icone_email_acesso_botao}/>Acesse com seu e-mail</button>
                <button className={styles.botao_inscrever}>Inscreva-se</button>
                </div>
            </div>
        </div>
    )
}