import { useState } from 'react';
import styles from './informacoes-uteis.module.css';

export default function InformacoesUteis(){

const texto = `Os voos de São Paulo para Rio de Janeiro do SkyPass é a melhor opção para as suas férias. Descubra todas as companhias áreas com voos a Rio de Janeiro e encontre o plano que mais se adapta a sua forma de viajar. E o melhor, tudo em um só lugar! Entre outras coisas, você poderá escolher os trechos mais rápidos ou os serviços mais baratos para o seu voo. Viaje à sua maneira. Além de poder buscar passagens aéreas a Rio de Janeiro para uma data específica, você também terá a disposição muitos filtros para ajudá-lo a encontrar oportunidades únicas para as suas férias. Por exemplo, você pode selecionar a opção: ver somente voos a Rio de Janeiro que não tenham escalas ou que tenham 1, 2 ou mais escalas. Também poderá ver as ofertas de voos baratos de cada semana pelos próximos 8 meses, podendo planejar a compra e economizar. Outros filtros que podem ser utilizados na sua busca são: duração de estadia, limite de orçamento, horário em que gostaria de voar e muitos outros. O voo perfeito para você está a um clique de distância. Se você ainda está em processo de investigação para sua viagem e deseja esperar futuras ofertas de voos a Rio de Janeiro saindo de São Paulo, também poderá criar um alerta. Desta forma, você receberá atualizações no seu e-mail sempre que aparecer promoções adaptadas à sua busca. Além disso, poderá cancelar este alerta em qualquer momento a partir de Minha Conta. Os voos a Rio de Janeiro perfeitos para as suas férias estão esperando por você aqui no SkyPass. Faça já a reserva das suas passagens!`;
const [perguntasSelecionadas, setPerguntasSelecionadas] = useState<string[]>(["", "", "", "", ""]);
const perguntasFrequentes = ['Quais companhias aéreas voam de São Paulo para Rio de Janeiro?','Qual é o mês mais barato para comprar seu voo para Rio de Janeiro saindo de São Paulo?','Quanto dura em média um voo de São Paulo para Rio de Janeiro?','Qual é o preço mais baixo de um voo para Rio de Janeiro saindo de São Paulo?','Quantos pontos posso acumular no Passaporte SkyPass comprando um voo de São Paulo para Rio de Janeiro?','Existem voos diretos de São Paulo para Rio de Janeiro e qual é o preço mais barato?']

const handlePerguntasSelecionadas = (index: number,item) => {
    const novasPerguntas = [...perguntasSelecionadas];
    if(perguntasSelecionadas[index] === item){
        novasPerguntas[index] = "";
    }
    else{
        novasPerguntas[index] = item;
        
    }
    setPerguntasSelecionadas(novasPerguntas);
}


function quebrarTexto(texto, n) {
  const palavras = texto.split(" ");
  const linhas = [];

  for (let i = 0; i < palavras.length; i += n) {
    linhas.push(palavras.slice(i, i + n).join(" "));
  }

  return linhas;
}

 const linhas = quebrarTexto(texto, 18);

    return (
        <div className={styles.secao_informacoes_uteis}>
            <div className={styles.container_texto_cards}>
            <h2 className={styles.texto_informacoes}>Informações úteis sobre os voos para Rio de Janeiro</h2>
            <div className={styles.container_card_informacoes}>
                
                <table className={styles.tabela_oferta}>
  <tr className={styles.container_colunas}>
    <td className={styles.td_primeira_coluna}>Melhor oferta de voo direto:</td>
    <td className={styles.td_segunda_coluna}>R$ 423</td>
  </tr>
 <tr className={styles.container_colunas}>
    <td className={styles.td_primeira_coluna}>Companhia aérea com mais ofertas:</td>
    <td className={styles.td_segunda_coluna}>Gol com 231 voos</td>
  </tr>
  <tr className={styles.container_colunas}>
    <td className={styles.td_primeira_coluna}>Melhor oferta disponível:</td>
    <td className={styles.td_segunda_coluna}>R$ 423</td>
  </tr>
  <tr className={styles.container_colunas}>
    <td className={styles.td_primeira_coluna}>Voos diretos disponíveis:</td>
    <td className={styles.td_segunda_coluna}>346</td>
  </tr>
  <tr className={styles.container_colunas}>
    <td className={styles.td_primeira_coluna}>Duração mínima de voo:</td>
    <td className={styles.td_segunda_coluna}>01 h 00 m</td>
  </tr>
  <tr className={styles.container_colunas}>
    <td className={styles.td_primeira_coluna}>Baixa estação:</td>
    <td className={styles.td_segunda_coluna}>fevereiro 2026</td>
  </tr>
  <tr className={styles.container_colunas}>
    <td className={styles.td_primeira_coluna}>Alta estação:</td>
    <td className={styles.td_segunda_coluna}>novembro 2025</td>
  </tr>
</table>
            </div>
            <div className={styles.card_voo}>
            <div className={styles.texto_card}>
                <h4 className={styles.titulo_card}>Voos de São Paulo para Rio de Janeiro</h4>
                 {linhas.map((linha, i) => (
        <p key={i}>{linha}</p>
      ))}
            </div>
            <img src="/images/foto-card.jpg" className={styles.imagem_card}/>
            </div>
            <div className={styles.secao_sugestoes}>
                <div className={styles.container_texto_cards}>
                <h2 className={styles.texto_sugestoes}>Porque você viu voos para Rio de Janeiro</h2>
                <div className={styles.container_card_sugestoes}>
                    <div className={styles.card_sugestoes}>
                        <img src="/images/foto-card.jpg" className={styles.imagem_card_sugestoes}/>
                        <div className={styles.container_texto_card_sugestoes}>
                        <h4 className={styles.texto_voos_para}>Voos para São Paulo</h4>
                        </div>
                    </div>
                    <div className={styles.card_sugestoes}>
                        <img src="/images/foto-card.jpg" className={styles.imagem_card_sugestoes}/>
                        <div className={styles.container_texto_card_sugestoes}>
                        <h4 className={styles.texto_voos_para}>Voos para Porto Seguro</h4>
                        </div>
                    </div>
                    <div className={styles.card_sugestoes}>
                        <img src="/images/foto-card.jpg" className={styles.imagem_card_sugestoes}/>
                        <div className={styles.container_texto_card_sugestoes}>
                        <h4 className={styles.texto_voos_para}>Voos para Juazeiro do Norte</h4>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className={styles.secao_opinioes}>
                <div className={styles.container_texto_secao_opinioes}>
                <h4 className={styles.texto_titulo_opiniao}>Descubra a opinião de outras pessoas que já compraram voos para Rio de Janeiro</h4>
                <div className={styles.container_opinioes}>
                    <div className={styles.card_opiniao}>
                        <h4 className={styles.texto_nome_opiniao}> Queiroz</h4>
                        <h6 className={styles.texto_viajou_em}>Viajou em família - Out.. 2025</h6>
                        <p className={styles.texto_opiniao}>"A praia."</p>
                    </div>
                    <div className={styles.card_opiniao}>
                        <h4 className={styles.texto_nome_opiniao}> Queiroz</h4>
                        <h6 className={styles.texto_viajou_em}>Viajou em família - Out.. 2025</h6>
                        <p className={styles.texto_opiniao}>"A praia."</p>
                    </div>
                    <div className={styles.card_opiniao}>
                        <h4 className={styles.texto_nome_opiniao}> Queiroz</h4>
                        <h6 className={styles.texto_viajou_em}>Viajou em família - Out.. 2025</h6>
                        <p className={styles.texto_opiniao}>"Eu amei o hotel que eu fiquei hospedada, atendimento ótimo, também fica bem localizado, perto de metro e ônibus.."</p>
                    </div>
                    <div className={styles.card_opiniao}>
                        <h4 className={styles.texto_nome_opiniao}> Queiroz</h4>
                        <h6 className={styles.texto_viajou_em}>Viajou em família - Out.. 2025</h6>
                        <p className={styles.texto_opiniao}>"A praia."</p>
                    </div>
                </div>
                </div>
            <div className={styles.container_avaliacoes}>
                <h2 className={styles.titulo_avaliacoes}>Avaliações das principais linhas aéreas de São Paulo para Rio de Janeiro</h2>
                <div className={styles.container_card_avaliacoes}>
                <div className={styles.card_avaliacao_linhas_aereas}>
                    <div className={styles.container_companhia_nota}>
                    <a className={styles.nome_companhia} href="#">Azul</a>
                    <p className={styles.nota_companhia}>7.4</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Limpeza</p>
                        <p>7.5</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Entretenimento</p>
                        <p>6.9</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Comida</p>
                        <p>6.8</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Bagagem</p>
                        <p>7.4</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Pontualidade</p>
                        <p>7.4</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Assento</p>
                        <p>7.5</p>
                    </div>
                </div>
                <div className={styles.card_avaliacao_linhas_aereas}>
                    <div className={styles.container_companhia_nota}>
                    <a className={styles.nome_companhia} href="#">Gol</a>
                    <p className={styles.nota_companhia}>7.4</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Limpeza</p>
                        <p>7.5</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Entretenimento</p>
                        <p>6.9</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Comida</p>
                        <p>6.8</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Bagagem</p>
                        <p>7.4</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Pontualidade</p>
                        <p>7.4</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Assento</p>
                        <p>7.5</p>
                    </div>
                </div>
                <div className={styles.card_avaliacao_linhas_aereas}>
                    <div className={styles.container_companhia_nota}>
                    <a className={styles.nome_companhia} href="#">Latam</a>
                    <p className={styles.nota_companhia}>7.4</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Limpeza</p>
                        <p>7.5</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Entretenimento</p>
                        <p>6.9</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Comida</p>
                        <p>6.8</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Bagagem</p>
                        <p>7.4</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Pontualidade</p>
                        <p>7.4</p>
                    </div>
                    <div className={styles.container_avaliacao_nota}>
                        <p>Assento</p>
                        <p>7.5</p>
                    </div>
                    
                </div>
                </div>
            </div>
            <div className={styles.secao_perguntas_frequentes}>
                <div className={styles.card_perguntas_frequentes}>
                <h2 className={styles.titulo_perguntas_frequentes}>Perguntas frequentes</h2>
                {perguntasFrequentes.map((item,index) => {
                    return (
                        <div className={styles.container_perguntas_frequentes}>
                        <div onClick={() => {handlePerguntasSelecionadas(index,item)}} className={styles.container_pergunta_frequente_dropdown}>
                <h5 className={styles.texto_pergunta_frequentes}>{item}</h5>
                <img src="/images/drop-down.png" className={styles.icone_drop_down}/>
                </div>
                {perguntasSelecionadas[index] === item ? <div className={styles.container_texto_perguntas_frequentes}>
                    {item === "Quais companhias aéreas voam de São Paulo para Rio de Janeiro?" ? <div>
                        <p className={styles.texto_resposta}>As companhias aéreas com mais ofertas de voo para Rio de Janeiro saindo de São Paulo são:</p>
                    <ul>
                        <li className={styles.texto_lista_pergunta}><span className={styles.copanhia_nome_perguntas}>Gol</span> com 231 voos</li>
                        <li className={styles.texto_lista_pergunta}><span className={styles.copanhia_nome_perguntas}>LATAM Airlines Group</span> com 88 voos</li>
                        <li className={styles.texto_lista_pergunta} ><span className={styles.copanhia_nome_perguntas}>Azul</span> com 231 voos</li>
                    </ul>
                        </div> : item === "Qual é o mês mais barato para comprar seu voo para Rio de Janeiro saindo de São Paulo?" ? <div>
                        <p className={styles.texto_resposta}>O mês em que você obterá os voos mais baratos para Rio de Janeiro saindo de São Paulo é fevereiro 2026. Por outro lado, novembro 2025 costuma ser o mês mais caro para voar.</p>
                    
                        </div> : item === "Quanto dura em média um voo de São Paulo para Rio de Janeiro?" ? <div>
                        <p className={styles.texto_resposta}>A duração dos voos para Rio de Janeiro saindo de São Paulo varia de acordo com a companhia aérea e as escalas a serem feitas. Um voo de ida para Rio de Janeiro saindo de São Paulo tem uma duração mínima de 01 h 00 m e um voo de retorno 01 h 00 m</p>
                    
                        </div> : item === "Qual é o preço mais baixo de um voo para Rio de Janeiro saindo de São Paulo?" ? <div>
                        <p className={styles.texto_resposta}>Atualmente, o preço mais baixo que você pode encontrar para Rio de Janeiro saindo de São Paulo é R$ 423.</p>
                    
                        </div> : item === "Quantos pontos posso acumular no Passaporte SkyPass  comprando um voo de São Paulo para Rio de Janeiro?" ? <div>
                        <p className={styles.texto_resposta}>Com a compra de uma passagem de São Paulo para Rio de Janeiro, você pode acumular pelo menos 7 pontos no seu Passaporte SkyPass.</p>

                        </div> : <div>
                        <p className={styles.texto_resposta}>Existem 346 companhias aéreas com voos diretos saindo de São Paulo para Rio de Janeiro e a passagem mais barata custa R$ 423</p>
                        </div>}
                    
                </div> : ""}
                
                </div>
                    )
                })}
                
                </div>
            </div>
            <div className={styles.secao_voos_outros_lugares}>
                <div className={styles.card_voo_outros_lugares}>
                    <p className={styles.titulo_voo_outros_lugares}>Voos para Rio de Janeiro a partir de outros lugares</p>
                <div className={styles.container_voos_outros_lugares}>
                    <p className={styles.texto_voo_outros_lugares}>Voos desde Porto Alegre para Rio de Janeiro</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos desde Brasília para Rio de Janeiro</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos desde Recife para Rio de Janeiro</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos desde Porto Alegre para Rio de Janeiro</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos desde Brasília para Rio de Janeiro</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos desde Recife para Rio de Janeiro</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos desde Porto Alegre para Rio de Janeiro</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos desde Brasília para Rio de Janeiro</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos desde Recife para Rio de Janeiro</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos desde Recife para Rio de Janeiro</p>
                </div>
                </div>
                <div className={styles.card_companhias_aereas_voos_para_cidade}>
                <p className={styles.titulo_voo_outros_lugares}>Companhias aéreas com voos para Rio de Janeiro</p>
                <div className={styles.container_voos_outros_lugares}>
                    <p className={styles.texto_voo_outros_lugares}>Voos desde Porto Alegre para Rio de Janeiro</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos desde Brasília para Rio de Janeiro</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos desde Recife para Rio de Janeiro</p>
                </div>
                </div>
                <div className={styles.card_companhias_aereas_voos_para_cidade}>
                <p className={styles.titulo_voo_outros_lugares}>Os melhores preços em voos</p>
                <div className={styles.container_voos_outros_lugares}>
                    <p className={styles.texto_voo_outros_lugares}>Voos para Recife</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos para Salvador</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos para Rio de Janeiro</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos para Fortaleza</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos para Maceió</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos para São Paulo</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos para João Pessoa</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos para Florianópolis</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos para Porto Seguro</p>
                    <p className={styles.texto_voo_outros_lugares}>Voos para Natal</p>

                </div>
                </div>
                
            </div>
            </div>
            </div>
            
        </div>
    )
}