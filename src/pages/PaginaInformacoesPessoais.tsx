import NavBar from "../componentes/navbar";
import SecaoInformacoesPessoais from "../componentes/secao-informacoes-pessoais";

export default function PaginaInformacoesPessoais(){
    return (
        <div>
            <NavBar minhaConta={true}/>
            <SecaoInformacoesPessoais/>
        </div>
    )
}