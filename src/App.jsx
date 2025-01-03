import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CalendarPage from './pages/Calendar'
import ContactPage from './pages/Contact'
// import "swiper/swiper-bundle.min.css";
function App () {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/calendar' element={<CalendarPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
