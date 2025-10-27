import NavBar from "../componentes/navbar";
import SecaoMeuPerfil from "../componentes/secao-meu-perfil";

export default function PaginaMeuPerfil(){
    return (
        <div>
            <NavBar minhaConta={true}/>
            <SecaoMeuPerfil/>
        </div>
    )
}