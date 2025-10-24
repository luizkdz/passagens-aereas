
import styles from './NavBar.module.css';
import { useState } from 'react';

export default function NavBar({minhaConta}) {

    const [showMenu, setShowMenu] = useState(false);
    const [autenticado, setAutenticado] = useState(true);

    const links = [{image:"/images/fone-de-ouvido.png",
        titulo:'Televendas 0800 883 6342'
    },
    {image:"/images/casa-2.png",
        titulo:'Anuncie sua propriedade'
    },
    {image:"/images/ajudando.png",
        titulo:'Ajuda'
    },
    {image:"/images/viagem.png  ",
        titulo:'Minhas Viagens'
    },
    {image:"/images/passaporte.png",
        titulo:'Benefícios Passaporte, Cupons,pontos e mais'
    }
];

    const menuNavegacao = [
  { image: "/images/cama.png", titulo: "Hospedagens" },
  { image: "/images/aviao-preto.png", titulo: "Passagens" },
  { image: "/images/mala-de-viagem.png", titulo: "Pacotes" },
  { image: "/images/fogo.png", titulo: "Ofertas" },
  { image: "/images/mala-de-viagem.png", titulo: "Pacotes prontos" },
  { image: "/images/casa.png", titulo: "Aluguéis" },
  { image: "/images/validando-ticket.png", titulo: "Passeios" },
  { image: "/images/hatchback.png", titulo: "Carros" },
  { image: "/images/mickey-mouse.png", titulo: "Disney" },
  { image: "/images/planeta-terra.png", titulo: "Universal" },
  { image: "/images/cruzeiro.png", titulo: "Cruzeiros" },
  { image: "/images/caminhao.png", titulo: "Transfers" }
];

const splitLinkTitulo = (titulo: string) => {
  if (titulo.length > 9) {
    // Divide em duas partes no meio
    const meio = Math.ceil(titulo.length / 2);
    const primeiraParte = titulo.slice(0, meio);
    const segundaParte = titulo.slice(meio);
    return (
      <>
        {primeiraParte}
        <br />
        {segundaParte}
      </>
    );
  }
}


    return (
        <div className={styles.secao_nav_bar}>
        <div className={!minhaConta ? styles.container_nav_bar : styles.container_nav_bar_border}>
            <div className={styles.container_imagem_logo}>
                <img src="/images/vite.svg" className={styles.imagem_logo} />
                <h2>SkyPass</h2>
            </div>
            <div></div>
            <div className={!minhaConta ? styles.container_televendas : styles.container_televendas_branco}>
               <ul className={styles.lista_links}> 
                {!minhaConta ? links.map((link, index) => {
                    
                    return (
                        <div className={index == 0 ? styles.container_imagem_links_roxo : styles.container_imagem_links} key={index}>
                            <div className={styles.div_imagem_link}>
                            <img src={link.image} className={styles.imagem_link} />
                            <li className={index != 4 ? "" : styles.link_beneficios}>{index != 4 ? link.titulo : splitLinkTitulo(link.titulo)}</li>
                            </div>
                            
                        </div>
                    )
                    
                }) : links.splice(2).map((link, index) => {
                    
                    return (
                        <div className={styles.container_imagem_links_branco} key={index}>
                            <div className={styles.div_imagem_link}>
                            <img src={link.image} className={styles.imagem_link} />
                            <li className={index != 4 ? "" : styles.link_beneficios}>{index != 4 ? link.titulo : splitLinkTitulo(link.titulo)}</li>
                            </div>
                            
                        </div>
                    )
                    
                })}
                <div onClick={() => {setShowMenu(!showMenu)}} className={styles.container_usuario_menu}>
                    <div className={styles.container_imagens_menu}>
                    <img src="/images/do-utilizador.png" className={styles.imagem_usuario}/>
                    <img src="/images/menu-aberto.png" className={styles.imagem_menu}/>
                    </div>
                {showMenu && !autenticado && (
                    <div className={styles.card_menu}>
                        <div className={styles.container_imagem_ola}>
                            <img src="/images/usuario-menu.png" className={styles.icone_usuario_menu}/>
                            <p className={styles.titulo_ola}>Olá!</p>
                        </div>
                        <div className={styles.card_beneficios_passaporte}>
                            <div className={styles.container_imagem_passaporte_texto}>
                                <img src="/images/passaporte.png" className={styles.imagem_passaporte_menu}/>
                                <p className={styles.titulo_beneficios}>Benefícios Passaporte</p>
                                </div>
                                <div className={styles.container_cupons_notificacao}>
                                <p>Cupons, pontos e mais</p>
                                <p className={styles.paragrafo_noticacoes}>1</p>
</div>
                            
                        </div>
                        <div className={styles.container_iniciar_sessao}>
                            <p className={styles.paragrafo_iniciar_sessao}>Iniciar sessão</p>
                        </div>
                    </div>
                )}
                {showMenu && autenticado && (
                    <div className={styles.card_logado}>
                        <div className={styles.container_imagem_ola_logado}>
                            <img src="/images/usuario-menu.png" className={styles.icone_usuario_menu}/>
                            <div className={styles.container_nome_beneficios}>
                            <p className={styles.titulo_ola}>Olá,Luiz!</p>
                            <div className={styles.container_texto_beneficios}>
                            <p className={styles.texto_beneficios}>Benefícios Passaporte</p>
                            <p className={styles.texto_beneficios}>Passaporte Viajante</p>
                            </div>
                            </div>
                        </div>
                        <div className={styles.container_pontos_passaporte_cupons}>
                            <div className={styles.card_pontos_passaporte}>
                                <div className={styles.container_imagem_pontos}>
                                <img src="/images/passaporte.png" className={styles.icone_passaporte_menu_logado}/>
                                <p className={styles.titulo_pontos}>Pontos</p>
                                </div>
                                <p>Passaporte</p>
                            </div>
                            <div className={styles.card_pontos_passaporte}>
                                <div className={styles.container_imagem_pontos}>
                                <img src="/images/cupom.png" className={styles.icone_cupom_menu_logado}/>
                                <p className={styles.titulo_pontos}>Cupons</p>
                                </div>
                                <p>de desconto</p>
                            </div>
                        </div>
                        <div className={styles.container_passaporte_skypass}>
                            <img src="/images/passaporte-rosa.png" className={styles.icone_passaporte_rosa}/>
                            <div className={styles.container_texto_passaporte}>
                                <p>Passaporte Skypass</p>
                                <p className={styles.texto_pontos_disponiveis}>Você possui 5 pontos disponíveis</p>
                            </div>
                            
                        </div>
                        <div className={styles.container_viagens_opinioes_perfil}>
                            <div className={styles.container_imagem_viagens}>
                                <img src="/images/mochila.png" className={styles.icone_bagagem}/>
                                <p>Minhas viagens</p>
                            </div>
                            <div className={styles.container_imagem_viagens}>
                                <img src="/images/chat.png" className={styles.icone_bagagem}/>
                                <p>Minhas opiniões</p>
                            </div>
                            <div className={styles.container_imagem_viagens}>
                                <img src="/images/usuario-logado.png" className={styles.icone_bagagem}/>
                                <p>Meu perfil</p>
                            </div>
                        </div>
                        <div className={styles.container_inteligencia_artificial_alertas_notificacoes}>
                            <div className={styles.container_imagem_viagens}>
                                <img src="/images/mochila.png" className={styles.icone_bagagem}/>
                                <p>Inteligência Artificial</p>
                            </div>
                            <div className={styles.container_imagem_viagens}>
                                <img src="/images/megafone.png" className={styles.icone_bagagem}/>
                                <p>Alertas</p>
                            </div>
                            <div className={styles.container_imagem_viagens}>
                                <img src="/images/sino-logado.png" className={styles.icone_bagagem}/>
                                <p>Notificações</p>
                            </div>
                            <div className={styles.container_imagem_viagens}>
                                <p className={styles.paragrafo_sair_conta}>Sair</p>
                            </div>
                        </div>
                    </div>
                )}
                </div>
                </ul>
            
            </div>
            
        </div>
        <div className={!minhaConta ? styles.down_nav_bar : styles.down_nav_bar_off}>
        {!minhaConta && menuNavegacao.map((item,index) => {return (
            <div className={styles.container_imagem_icone_menu} key={index}>
                <img src={item.image} className={styles.imagem_item_menu_navegacao}/>
                <p>{item.titulo}</p>
            </div>
        )})}
        </div>
        </div>

    )

}