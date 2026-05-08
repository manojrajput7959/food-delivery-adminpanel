import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='min-h-screen pt-30 pl-10 w-[35vh] relative border-r border-gray-400'>
            <div className='hover:cursor-pointer'>

                <NavLink to={'/add'}className={({isActive})=>isActive ? 'flex p-1 items-center border-l border-t border-b border-orange-300 bg-orange-200  hover:bg-gray-100 hover:scale-98':"flex p-1 items-center border-l border-t border-b border-gray-400  hover:bg-gray-100 hover:scale-98"}>
                    <img src={assets.add_icon} alt="" className='w-[4vh]' />
                    <p className='ml-1.5'>Add items</p>
                </NavLink>

                <NavLink to={'/list'}className={({isActive})=>isActive ? 'flex p-1 items-center border-l border-t border-b border-orange-300 bg-orange-200   hover:bg-gray-100 hover:scale-98 my-3.5':"flex p-1 my-4 items-center border-l border-t border-b border-gray-400  hover:bg-gray-100 hover:scale-98"}>
                    <img src={assets.order_icon} alt="" className='w-[4vh]' />
                    <p className='ml-1.5'>List items</p>
                </NavLink>


                <NavLink to={'/'}className={({isActive})=>isActive ? 'flex p-1 items-center border-l border-t border-b border-orange-300 bg-orange-200   hover:bg-gray-100 hover:scale-98':"flex p-1 items-center border-l border-t border-b border-gray-400  hover:bg-gray-100 hover:scale-98"}>
                    <img src={assets.order_icon} alt="" className='w-[4vh]' />
                    <p className='ml-1.5'>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar
