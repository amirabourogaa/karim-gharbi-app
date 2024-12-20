import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
function App () {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
