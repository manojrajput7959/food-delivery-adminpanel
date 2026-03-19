import React, { useContext } from 'react'
import { StoreContext } from './AllState'
import { useNavigate } from 'react-router-dom'

const BottomCart = ({toredirect}) => {
  
    const {getSubTotal} = useContext(StoreContext)
    const navigate = useNavigate()
    return (
    <>
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg px-4 py-3 flex justify-between items-center lg:hidden z-50">
        <div>
          <p className="text-sm text-gray-500">Total</p>
          <h2 className="font-bold text-lg">
            ${getSubTotal()}
          </h2>
        </div>

        <button
          onClick={() => navigate(toredirect)}
          className="bg-orange-500 cursor-pointer text-white px-4 py-2 rounded-lg"
        >
          Checkout
        </button>
      </div>
    </>
  )
}

export default BottomCart
