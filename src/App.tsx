
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PaginaInicial from './pages';

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<PaginaInicial/>} >

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
