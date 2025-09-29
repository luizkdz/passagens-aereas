import styles from './secao-propagandas.module.css';

export default function SecaoPropagandas(){
    
    const propagandas = ['/images/propaganda-1.png',
        '/images/propaganda-2.png',
        '/images/propaganda-3.png',
        '/images/propaganda-4.png',
    ];
    
    return (
        <div className={styles.secao_propagandas}>
            {propagandas.map((imagem, index) => {
                return (
                    <div key ={index} className={styles.container_propaganda}>
                        <img src={imagem} className={styles.imagem_propaganda}/>
                    </div>
                )
            })}
        </div>
    )
}