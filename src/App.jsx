import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./main.scss"
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Header from './components/header/Header'
import ScrollToTop from './utils/ScrollToTop'
import Footer from './components/footer/Footer'
import Map from './components/map/Map'
import TeachersAndGroups from './pages/TeachersAndGroups'

function App() {


  return (
    <div className='app'>
        <BrowserRouter>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/teachers" element={<TeachersAndGroups />} />
          </Routes>
          <Map />
          <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
