
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial.tsx';
import PaginaPassagensAereas from './pages/PassagensAereas.tsx';
import './App.css'
import PaginaVoos from './pages/PaginaVoos.tsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<PaginaInicial/>} >
        
        </Route>
        <Route path = "/passagens-aereas" element={<PaginaPassagensAereas/>}></Route>
        <Route path = "/shop" element={<PaginaVoos/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
