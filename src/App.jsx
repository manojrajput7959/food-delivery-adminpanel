import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Route, Routes} from 'react-router-dom'
import Add from './Pages/Add'
import List from './Pages/List'
import Order from './Pages/Order'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="relative">
      <ToastContainer/>
      <Navbar />

      {/* Main layout */}
      <div className="flex pt-16"> 
        {/* Sidebar */}
        <Sidebar />

        {/* Pages */}
        <div className="flex-1 p-5">
          <Routes>
            <Route path="/add" element={<Add/>}/>
            <Route path="/list" element={<List/>}/>
            <Route path="/" element={<Order/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
