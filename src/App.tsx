
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial.tsx';
import PaginaPassagensAereas from './pages/PassagensAereas.tsx';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<PaginaInicial/>} >
        
        </Route>
        <Route path = "/passagens-aereas" element={<PaginaPassagensAereas/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
