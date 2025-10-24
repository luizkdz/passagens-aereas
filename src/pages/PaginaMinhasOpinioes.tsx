import NavBar from "../componentes/navbar"
import SecaoMinhasOpinioes from "../componentes/secao-minhas-opinioes"

export default function PaginaMinhaOpinioes(){
    return (
        <div>
            <NavBar minhaConta={true}/>
            <SecaoMinhasOpinioes/>
        </div>
    )
}