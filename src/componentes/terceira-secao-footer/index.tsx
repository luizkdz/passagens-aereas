import styles from './footer-terceira-secao.module.css';

export default function FooterTerceiraSecao(){
    return (
        <div className={styles.secao_footer}>
            <div className={styles.container_footer}>
                <div className={styles.primeiro_texto}>
                    <p>Skypass está presente em Brasil, Argentina, Chile, Colômbia, México, Peru, Paraguai, Uruguai e Estados Unidos.</p>
                    <p>SKYPASS VIAGENS – Ministério do Turismo – Cadastur 99.999999.99.9999-9 / 99.999999.99.9999-8
Copyright 2015-2025, Skypass Viagens Ltda. Todos os direitos reservados.</p>
                    <p> Av. Central, 1000, 5º andar, Centro Empresarial Skypass, São Paulo - SP, CEP 01000-000</p>
                </div>
                <div className={styles.primeiro_texto}>
                    <p>A Skypass comercializa os produtos de seus fornecedores somente de forma direta por seus canais oficiais, como:
🌐 site (www.skypass.com
)
📱 aplicativo
📞 televendas (0800 900 9090)
💻 videochamada
💬 WhatsApp oficial
🏬 lojas físicas</p>
                    <p>⚠️ Atenção: A Skypass não realiza vendas por redes sociais (Facebook, Instagram, X (ex-Twitter), TikTok etc).</p>
                    <p>A Skypass não envia mensagens ou e-mails de contato com domínios diferentes de @skypass.com.
Qualquer e-mail vindo de domínios como @gmail.com, @outlook.com, @hotmail.com ou semelhantes não têm relação com a Skypass.</p>
                </div>
            </div>
        </div>
    )
}