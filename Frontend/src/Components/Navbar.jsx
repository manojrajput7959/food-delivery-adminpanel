import React, { useState, useContext } from 'react'
import { assets } from '../assets/admin_assets/assets'
import { FRassets } from '../assets/frontend_assets/FRassets'
import { Link, NavLink } from 'react-router-dom'
import { StoreContext } from './AllState'

const Navbar = ({ setShowLogin }) => {
  const { getSubTotal, token, setToken } = useContext(StoreContext)
  const [isOpen, setIsOpen] = useState(false)

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
  }

  return (
    <nav className="w-full bg-white shadow-md fixed z-50">
      <div className="flex justify-between items-center px-4 lg:px-20 py-2">

        {/* Logo */}
        <Link to={'/'} className="flex items-center">
          <img src={assets.logo} alt="Logo" className="h-10 lg:h-12" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-10 text-lg font-medium text-black ">
          <NavLink to={'/'} className={({ isActive }) => isActive ? "text-orange-600 border-b-2 border-orange-500" : ""}>Home</NavLink>
          <a href={"#Menu-item"}>Menu</a>
          <a href="#Menu-detail">Foods</a>
          <a href="#Footer-box">Contact us</a>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5 lg:gap-10">
          {/* Search */}
          <img src={FRassets.search_icon} alt="Search" className="lg:w-6 lg:h-6 w-[6vw] h-[6vw]  cursor-pointer" />

          {/* Cart */}
          <div className="relative">
            <Link to="/cart">
              <img src={FRassets.basket_icon} alt="Cart" className="lg:w-7 lg:h-7 w-[6vw] h-[6vw] cursor-pointer" />
            </Link>
            {getSubTotal() > 0 && <span className="absolute w-2 h-2 bg-amber-500 rounded-full left-5 bottom-5"></span>}
          </div>

          {/* Chart Icon */}
          {/* <img src={FRassets.chart_icon} alt="Chart" className="w-6 h-6 cursor-pointer" /> */}

          {/* Profile / Login */}
          {!token ? (
            <button onClick={() => setShowLogin(true)} className="hidden lg:block text-white bg-orange-400 px-4 py-1 rounded-lg hover:scale-95 transition">
              Sign in
            </button>
          ) : (
            <div className="hidden lg:block relative group">
              <img src={FRassets.profile_icon} alt="Profile" className="w-6 h-8 cursor-pointer" />
              <div className="absolute hidden group-hover:flex flex-col bg-zinc-300 right-0 z-10 border border-zinc-600 w-36">
                <div className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:scale-95 transition">
                  <img src={FRassets.basket_icon} alt="Orders" className="w-6 h-6" />
                  <p>Orders</p>
                </div>
                <hr />
                <div onClick={logout} className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:scale-95 transition">
                  <img src={FRassets.logout_icon} alt="Logout" className="w-6 h-6" />
                  <p>Logout</p>
                </div>
              </div>
            </div>
          )}

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden flex flex-col justify-between w-6 h-5 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <span className={`h-0.5 w-full bg-black transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`h-0.5 w-full bg-black transition-all ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`h-0.5 w-full bg-black transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white px-4 py-4 flex flex-col gap-4 text-black font-medium">
          <NavLink to={'/'} onClick={() => setIsOpen(false)}>Home</NavLink>
          <a href="#Menu-item" onClick={() => setIsOpen(false)}>Menu</a>
          <a href="#Menu-detail" onClick={() => setIsOpen(false)}>Foods</a>
          <a href="#Footer-box" onClick={() => setIsOpen(false)}>Contact us</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar