import NavBar from "../componentes/navbar";
import SecaoMinhasViagens from "../componentes/secao-minhas-viagens";

export default function PaginaMinhasViagens(){
    return (
        <div>
            <NavBar minhaConta={true}/>
            <SecaoMinhasViagens/>
        </div>
    )
}