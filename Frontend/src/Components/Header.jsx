import React from 'react'
import { FRassets } from '../assets/frontend_assets/FRassets'
const Header = () => {
    return (
        <div>
            <div className=" lg:flex w-screen lg:flex-row-reverse lg:h-auto h-[85vh] lg:py-4 lg:pl-20 pb-10  lg:mt-13 mt-10" >
                <div className="lg:ml-2 ml-2 w-[96vw] lg:h-auto lg:w-[70vw] relative">
                    <img src={FRassets.header_img} alt="" className='lg:h-[80vh] lg:w-[99vw] hidden lg:flex' />
                    <img src={FRassets.header_img2} alt="" className=' lg:hidden ' />
                </div>
                <div className="absolute lg:relative lg:block flex flex-col gap-3 lg:top-30 lg:left-0 lg:bottom-0 lg:p-auto pl-5 text-black  lg:w-[50%]">
                    <h1 className='lg:text-7xl text-shadow-lg text-shadow-zinc-400 leading-tight lg:leading-20 text-4xl drop-shadow-lg'>Order your <br /> favourite food here</h1>

                    <p className='lg:py-5 px-2 hidden lg:inline-block lg:text-lg lg:tracking-tight lg:leading-7 text-lim-600'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise: Ourmission is to satisfy your cravings and clovate your dining experience, one delicious meal of a time.</p>

                    <a href="#Menu-detail">
                        <button className="lg:px-6 lg:py-2 px-4 py-1 rounded-md lg:mt-auto mt-2 text-black bg-gradient-to-r from-rose-300 from-10% via-orange-300 via-60% to-lime-200 to-100%x`x  transition-all duration-300 hover:scale-95 hover:from-lime-500 hover:to-yellow-400">
                            View Menu
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
