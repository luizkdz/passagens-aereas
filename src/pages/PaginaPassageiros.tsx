import NavBar from "../componentes/navbar";
import SecaoPaginaPassageiros from "../componentes/secao-pagina-passageiros";

export default function PaginaPassageiros(){
    return (
        <div>
            <NavBar minhaConta={true}/>
            <SecaoPaginaPassageiros/>
        </div>
    )
}