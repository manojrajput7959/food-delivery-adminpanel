import React, { useContext } from 'react'
import { FRassets } from '../assets/frontend_assets/FRassets'
import { StoreContext } from '../Components/AllState'
import { Link, useNavigate } from 'react-router-dom'
import BottomCart from '../Components/BottomCart'

const Cart = () => {

  const {
    food_list,
    cartItem,
    deleteItem,
    getSubTotal,
    cartRemoveItem,
    addtoCart,
    url
  } = useContext(StoreContext)

  const navigate = useNavigate()

  return (
    <div className="px-4 lg:px-24 py-10 pb-24 lg:pb-0 mt-15">

      {/* Cart Header (Desktop) */}
      <div className="hidden md:grid grid-cols-6 text-xl pl-20 text-shadow-md font-extralight  text-shadow-zinc-600 border-b pb-2">
        <h4>Item</h4>
        <h4>Title</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4>Total</h4>
        <h4>Remove</h4>
      </div>

      {/* Cart Items */}
      {food_list.map((item) => {
        if (cartItem[item._id] > 0) {
          return (
            <div key={item._id} className="border-b py-4">

              {/* Mobile Layout */}
              <div className="flex flex-col md:hidden gap-3">

                <div className="flex gap-3">
                  <img
                    src={url + "/image/" + item.image}
                    alt=""
                    className="w-20 h-20 object-cover rounded"
                  />

                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">${item.price}</p>
                    <p className="text-sm">
                      Total: ₹{item.price * cartItem[item._id]}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img
                      onClick={() => cartRemoveItem(item._id)}
                      src={FRassets.remove_icon_red}
                      className="w-6 cursor-pointer"
                    />
                    <span>{cartItem[item._id]}</span>
                    <img
                      onClick={() => addtoCart(item._id)}
                      src={FRassets.add_icon_green}
                      className="w-6 cursor-pointer"
                    />
                  </div>

                  <img
                    onClick={() => deleteItem(item._id)}
                    src={FRassets.cross_icon}
                    className="w-5 cursor-pointer"
                  />
                </div>

              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-6 items-center text-center mt-2">
                <img
                  src={url + "/image/" + item.image}
                  className="w-16 mx-auto"
                />
                <h3>{item.name}</h3>
                <h3>₹{item.price}</h3>

                <div className="flex justify-center items-center gap-2">
                  <img
                    onClick={() => cartRemoveItem(item._id)}
                    src={FRassets.remove_icon_red}
                    className="w-5 cursor-pointer"
                  />
                  <span>{cartItem[item._id]}</span>
                  <img
                    onClick={() => addtoCart(item._id)}
                    src={FRassets.add_icon_green}
                    className="w-5 cursor-pointer"
                  />
                </div>

                <h3>₹{item.price * cartItem[item._id]}</h3>

                <img
                  onClick={() => deleteItem(item._id)}
                  src={FRassets.cross_icon}
                  className="w-5 mx-auto cursor-pointer"
                />
              </div>

            </div>
          )
        }
      })}

      {/* Add Items Button */}
      <div className="mt-6">
        <Link to="/">
          <button className="flex items-center cursor-pointer gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:scale-95">
            <img src={FRassets.bag_icon} className="w-5" />
            Add Items
          </button>
        </Link>
      </div>

      {/* Totals + Promo */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Totals */}
        <div>
          <h1 className="text-2xl lg:text-4xl font-light  text-shadow-lg text-shadow-zinc-600">
            Cart Totals
          </h1>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${getSubTotal()}</p>
            </div>

            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>${getSubTotal() === 0 ? 0 : 2}</p>
            </div>

            <hr />

            <div className="flex justify-between font-bold">
              <p>Total</p>
              <p>
                ${getSubTotal() === 0 ? 0 : getSubTotal() + 5}
              </p>
            </div>
          </div>
        </div>

        {/* Promo */}
        <div>
          <h1 className="mb-3">
            If you have a promo code, enter it here
          </h1>

          <div className="flex">
            <input
              type="text"
              placeholder="Promo code"
              className="bg-gray-200 px-3 py-2 w-full outline-none"
            />
            <button className="bg-black text-white px-4">
              Submit
            </button>
          </div>
        </div>

      </div>

      {/* Checkout Button (Desktop Normal) */}
      <div className="mt-6 hidden lg:block">
        <button
          onClick={() => navigate('/Order')}
          className="bg-orange-500 px-4 py-2 text-white cursor-pointer rounded hover:scale-95"
        >
          Proceed to checkout
        </button>
      </div>

      {/* 🔥 Mobile Fixed Bottom Cart */}
      <BottomCart toredirect={"/order"}/>

      {/* 🔥 Desktop Fixed Sidebar */}
    </div>
  )
}

export default Cart