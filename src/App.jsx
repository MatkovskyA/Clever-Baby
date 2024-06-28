import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Metodology from './pages/Metodology'
import Teachers from './pages/Teachers'
import Header from './components/header/Header'
import ScrollToTop from './utils/ScrollToTop'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
          <ScrollToTop />
          <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/contacts" element={<Contacts/>}/>
            <Route  path="/metodology" element={<Metodology/>}/>
            <Route  path="/teachers" element={<Teachers/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
