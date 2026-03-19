import React, { useState } from 'react'
import {Router,Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import PlaceHolder from './Pages/PlaceHolder'
import Cart from './Pages/Cart'
import Navbar from './Components/Navbar'
import Contact from './Pages/Contact'
import Login from './Components/Login'
import Payment from './Components/Payment'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  
  return (
    <div className={"overflow-x-hidden"}> 
      <ToastContainer/>
      {showLogin && (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
  </div>
)}
   
      <Navbar setShowLogin={setShowLogin}/> 
      <Routes>    
        <Route path='/' element={<Home showLogin={showLogin} />}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Order' element={<PlaceHolder/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Payment' element={<Payment/>}/>
      </Routes>
      <Footer />

    </div>
  )
}

export default App
