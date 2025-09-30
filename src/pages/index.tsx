import BannerViagem from "../componentes/banner-viagem/index.tsx";
import FooterPrimeiraSecao from "../componentes/footer-primeira-secao/index.tsx";
import FooterSegundaSecao from "../componentes/footer-segunda-secao/index.tsx";
import NavBar from "../componentes/navbar/index.tsx";
import Ofertas from "../componentes/ofertas/index.tsx";
import SecaoPropagandas from "../componentes/primeira-secao-propagandas/index.tsx";
import Inscrever from "../componentes/secao-inscrever/index.tsx";
import PassagensAereas from "../componentes/secao-passagens-aereas/index.tsx";
import SegundaSecaoPropagandas from "../componentes/segunda-secao-propagandas/index.tsx";
import TerceiraSecaoFooter from "../componentes/terceira-secao-footer/index.tsx";


export default function PaginaInicial() {
    return (
        <div>
            <NavBar/>
            <BannerViagem/>
            <SecaoPropagandas/>
            <PassagensAereas/>
            <SegundaSecaoPropagandas/>
            <Ofertas/>
            <Inscrever/>
            <FooterPrimeiraSecao/>
            <FooterSegundaSecao/>
            <TerceiraSecaoFooter/>
        </div>
    )

}