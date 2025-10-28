import NavBar from "../componentes/navbar";
import SecaoFormasDePagamentos from "../componentes/secao-formas-de-pagamentos";

export default function PaginaFormasDePagamentos(){
    return (
        <div>
            <NavBar minhaConta={true}/>
            <SecaoFormasDePagamentos/>
        </div>
    )
}