import React from 'react'
import { FRassets } from '../assets/frontend_assets/FRassets'
import { assets } from '../assets/admin_assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-black text-white mt-20">

      {/* Main Footer */}
      <div className="px-6 lg:px-24 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Logo + Description */}
        <div>
          <img src={assets.logo} alt="" className="mb-4" />

          <p className="text-gray-400 text-sm leading-relaxed">
            Craving delicious meals delivered right to your doorstep? 
            Explore a wide variety of cuisines from your favorite local 
            restaurants. Fast, fresh, and always satisfying.
          </p>

          <div className="flex gap-4 mt-5">
            <img src={FRassets.twitter_icon} alt="" className="cursor-pointer"/>
            <img src={FRassets.facebook_icon} alt="" className="cursor-pointer"/>
            <img src={FRassets.linkedin_icon} alt="" className="cursor-pointer"/>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Company</h1>

          <div className="flex flex-col gap-2 text-gray-400">
            <Link to={'/'}>Home</Link>
            <p>About us</p>
            <p>Delivery</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Get In Touch</h1>

          <div className="text-gray-400 space-y-2">
            <p>+1-212-4560-7890</p>
            <p>tomato@gmail.com</p>
          </div>
        </div>

      </div>

      {/* Divider */}
      <hr className="border-gray-700 w-11/12 mx-auto" />

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm py-4">
        Copyright 2024 @Tomato.com - All Rights Reserved
      </div>

    </div>
  )
}

export default Footer