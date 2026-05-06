import React from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  return (
    <div className=''>
     <div className='px-15 py-1 items-center w-screen flex justify-between shadow-md shadow-gray-400 fixed z-50 bg-white'>
        <div className=''>
            <img src={assets.logo} alt="" className='w-30'/>
        </div>

        <div>
           <img src={assets.profile_image} alt=""  className='w-10'/>
        </div>
     </div>
     </div>
  )
}

export default Navbar
