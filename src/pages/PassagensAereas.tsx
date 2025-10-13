import BannerViagem from "../componentes/banner-viagem";
import FooterPrimeiraSecao from "../componentes/footer-primeira-secao";
import FooterSegundaSecao from "../componentes/footer-segunda-secao";
import NavBar from "../componentes/navbar";
import InformacoesUteis from "../componentes/secao-informacoes-uteis";
import Inscrever from "../componentes/secao-inscrever";
import FooterTerceiraSecao from "../componentes/terceira-secao-footer";
import Voos from "../componentes/voos";

export default function PaginaPassagensAereas() {
    return (
        <div>
            <NavBar/>
            <BannerViagem shop = {false} passagensAereas={true} />
            <Voos/>
            <InformacoesUteis/>
            <Inscrever/>
            <FooterPrimeiraSecao/>
            <FooterSegundaSecao/>
            <FooterTerceiraSecao/>

        </div>
    )
}