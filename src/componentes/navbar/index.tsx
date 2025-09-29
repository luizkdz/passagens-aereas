
import styles from './NavBar.module.css';


export default function NavBar() {

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
  { image: "/images/aviao.png", titulo: "Passagens" },
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


    return (
        <div className={styles.secao_nav_bar}>
        <div className={styles.container_nav_bar}>
            <div className={styles.container_imagem_logo}>
                <img src="/images/vite.svg" className={styles.imagem_logo} />
                <h2>SkyPass</h2>
            </div>
            <div></div>
            <div className={styles.container_televendas}>
               <ul className={styles.lista_links}> 
                {links.map((link, index) => {
                    return (
                        <div className={index == 0 ? styles.container_imagem_links_roxo : styles.container_imagem_links} key={index}>
                            <div className={styles.div_imagem_link}>
                            <img src={link.image} className={styles.imagem_link} />
                            <li>{link.titulo}</li>
                            </div>
                            
                        </div>
                    )
                    
                })}
                <div className={styles.container_usuario_menu}>
                    <img src="/images/do-utilizador.png" className={styles.imagem_usuario}/>
                    <img src="/images/menu-aberto.png" className={styles.imagem_menu}/>

                </div>
                </ul>
            
            </div>
            
        </div>
        <div className={styles.down_nav_bar}>
        {menuNavegacao.map((item,index) => {return (
            <div className={styles.container_imagem_icone_menu} key={index}>
                <img src={item.image} className={styles.imagem_item_menu_navegacao}/>
                <p>{item.titulo}</p>
            </div>
        )})}
        </div>
        </div>

    )

}