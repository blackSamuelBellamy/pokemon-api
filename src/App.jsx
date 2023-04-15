import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { States } from './hooks/DataContext'
import Planilla from './components/Planilla'
import Home from './views/Home'
import Pokemones from './views/Pokemones'
import NotFound from './components/NotFound'
import './App.css';

const App = () => {
  return (
    <div className="container">
      <States>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Planilla />}>
              <Route index element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/pokemones' element={<Pokemones />} />
              <Route path='/pokemones/:pokemon' element={<Pokemones />} />
              <Route path='/Not-Found' element= {<NotFound />} />
              <Route path='*' element= {<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </States>
    </div>
  )
}

export default App;
