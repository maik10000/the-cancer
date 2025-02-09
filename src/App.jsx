import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Consulta from './Consulta'
import Footer from './Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/consulta' element={<Consulta />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App  
