import { useState } from 'react';
import styles from './secao-minhas-opinioes.module.css';

export default function SecaoMinhasOpinioes(){

    const [ativo,setAtivo] = useState('pendentes');


    return (
        <div className={styles.secao_minhas_opinioes}>
            <div className={styles.container_minhas_opinioes}>
            <h2 className={styles.titulo_minhas_opinioes}>Minhas opiniões</h2>
            <div className={styles.container_pendentes_realizadas}>
                <p onClick={() => {setAtivo('pendentes')}} className={ativo === "pendentes" ? styles.texto_pendentes_realizadas : styles.texto_pendentes_realizadas_desmarcada}>Pendentes</p>
                <p onClick={() => {setAtivo('realizadas')}} className={ativo === "realizadas" ? styles.texto_pendentes_realizadas : styles.texto_pendentes_realizadas_desmarcada}>Realizadas</p>
            </div>
            </div>
            
            <div className={styles.secao_opinioes_realizadas}>
            {ativo === "pendentes" && (<div className={styles.container_opinioes_realizadas}>
                
                <div className={styles.container_imagem_textos}>
                    <img src="/images/viajante.png" className={styles.imagem_viajante}/>
                    <div className={styles.container_titulo_descricao}>
                    <h2 className={styles.titulo_esperando}>Esperando novas aventuras</h2>
                    <p className={styles.paragrafo_descricao}>Ainda não há experiências para você deixar sua opinião. Que tal conferir as nossas ofertas e planejar sua próxima viagem?</p>
                    <button className={styles.botao_ver_ofertas}>Ver ofertas</button>
                    </div>
                </div>
            </div>)}
            {ativo === "realizadas" && (<div className={styles.container_opinioes_realizadas}>
                
                <div className={styles.container_imagem_textos}>
                    <img src="/images/teclado.png" className={styles.imagem_viajante}/>
                    <div className={styles.container_titulo_descricao}>
                    <h2 className={styles.titulo_esperando}>Ops! Não há nada por aqui.<br/>Por enquanto...</h2>
                    <p className={styles.paragrafo_descricao}>Que tal conferir nossas ofertas e planejar sua próxima viagem?</p>
                    <button className={styles.botao_ver_ofertas}>Ver ofertas</button>
                    </div>
                </div>
            </div>

            )}
            </div>
            
        </div>
    )
}