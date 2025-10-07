import BannerViagem from "../componentes/banner-viagem";
import NavBar from "../componentes/navbar";
import Voos from "../componentes/voos";

export default function PaginaPassagensAereas() {
    return (
        <div>
            <NavBar/>
            <BannerViagem passagensAereas={true} />
            <Voos/>
        </div>
    )
}