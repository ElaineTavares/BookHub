import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './pages/Inicio'
import QueroLer from './pages/QueroLer'
import QueroLerProvider from './contexts/QueroLerContext'

function App() {
 

  return (
    <BrowserRouter>
      <QueroLerProvider>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/queroler' element={<QueroLer/>}/>
        </Routes>
      </QueroLerProvider>     
    </BrowserRouter>
  )
}

export default App
