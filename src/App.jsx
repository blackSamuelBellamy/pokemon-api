import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { States } from './hooks/DataContext'
import Planilla from './components/Planilla'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import Stories from './views/Stories'
import Contacto from './views/Contacto'
import './App.css';

const App = () => {
  return (
    <div className="container">
      <States>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Planilla />}>
              <Route index element={<Home />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Pokemones' element={<Pokemones />} />
              <Route path='/Pokemones/:pokemon' element={<Pokemones />} />
              <Route path='/Stories' element={<Stories />} />
              <Route path='/Contacto' element={<Contacto />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </States>
    </div>
  )
}

export default App;
