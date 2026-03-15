import React, { useContext, useEffect, useState } from "react"
import { FRassets } from '../assets/frontend_assets/FRassets'
import Cart from "../Pages/Cart"
import { StoreContext } from "./AllState"

const MenuItems = ({ category }) => {

const {food_list,cartItem,addtoCart,cartRemoveItem,url} = useContext(StoreContext)

  const filteredFood =
    category === "All"
      ? food_list
      : food_list.filter(item => item.category === category)
  
  return (
    <div>
      <div className="pl-26 py-4" id="Menu-detail">
        <h3 className="text-2xl">Top dishes near you</h3>
      </div>

       {/* all food list */}
      <div className="px-23 py-3 flex flex-wrap">

        {filteredFood.map((items, index) => (
          <div key={index} className="w-3/12 py-4 pl-4">
            <div className="w-11/12 relative">
              <img src={url+"/image/"+items.image} alt="" className="object-cover" />
              <div className="absolute top-38 left-1 cursor-pointer">
                
                {/* add to card condition */}
                {!cartItem[items._id] ?
                  <img src={FRassets.add_icon_white} onClick={() => { addtoCart(items._id) }} className="w-10" />
                  : <div className="flex w-25 justify-between bg-white items-center rounded-3xl">
                    <img src={FRassets.add_icon_green} onClick={() => { addtoCart(items._id) }} />
                    <p className="">{cartItem[items._id]}</p>
                    <img src={FRassets.remove_icon_red} onClick={() => { cartRemoveItem(items._id) }} />
                  </div>
                }
              </div>

            </div>
            <div className="flex justify-between pr-8">
              <h2>{items.name}</h2>
              <img
                src={FRassets.rating_starts}
                alt=""
                className="object-contain"
              />
            </div>
            <div className="py-1">
              <p className="text-gray-700 text-sm">{items.description}</p>
            </div>
            <div>
              <h2 className="text-amber-600 text-xl font-bold">
                ${items.price}
              </h2>
            </div>
          </div>
        ))}
      </div>
      {/* <Cart cartItem={cartItem} cartRemoveItem={cartRemoveItem} /> */}
    </div>
  )
}

export default MenuItems
