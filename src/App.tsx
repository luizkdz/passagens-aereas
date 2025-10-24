
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial.tsx';
import PaginaPassagensAereas from './pages/PassagensAereas.tsx';
import './App.css'
import PaginaVoos from './pages/PaginaVoos.tsx';
import PaginaCheckout from './pages/PaginaCheckout.tsx';
import PaginaLogin from './pages/PaginaLogin.tsx';
import PaginaCadastre from './pages/PaginaCadastre.tsx';
import PaginaCadastreEmail from './pages/PaginaCadastreEmail.tsx';
import PaginaMinhasViagens from './pages/PaginaMinhasViagens.tsx';
import PaginaMinhasOpinioes from './pages/PaginaMinhasOpinioes.tsx';
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<PaginaInicial/>} >
        
        </Route>
        <Route path = "/passagens-aereas" element={<PaginaPassagensAereas/>}></Route>
        <Route path = "/shop" element={<PaginaVoos/>}></Route>
        <Route path="/checkout" element= {<PaginaCheckout/>}></Route>
        <Route path="/login" element={<PaginaLogin/>}></Route>
        <Route path="/login/signup" element={<PaginaCadastre/>}></Route>
        <Route path="/login/signup/email" element={<PaginaCadastreEmail/>}></Route>
        <Route path="/me/bookings" element={<PaginaMinhasViagens/>}></Route>
        <Route path="/me/reviews/myOpinions" element={<PaginaMinhasOpinioes/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
