import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import IndividualServices from './Pages/IndividualServices'
import Zambeel360 from './Pages/Zambeel360'
import ZambeelDropshipping from './Pages/ZambeelDropshipping'
import SignupForm from './Pages/SignupForm'
import Footer from './component/Footer/Footer'
import SideBar from './component/SideBar/SideBar'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <SideBar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/zambeeldropshipping' element={<ZambeelDropshipping/>}/>
    <Route path='/zambeel360' element={<Zambeel360/>}/>
    <Route path='/individualservices' element={<IndividualServices/>}/>
    <Route path='/aboutus' element={<AboutUs/>}/>
    <Route path='/signupform' element={<SignupForm/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
