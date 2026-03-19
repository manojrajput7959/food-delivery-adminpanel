import React, { useContext } from "react"
import { FRassets } from "../assets/frontend_assets/FRassets"
import { StoreContext } from "./AllState"
import Rating from "./Rating"

const MenuItems = ({ category }) => {

  const { food_list, cartItem, addtoCart, cartRemoveItem, url } = useContext(StoreContext)

  const filteredFood =
    category === "All"
      ? food_list
      : food_list.filter(item => item.category === category)

  return (
    <div id="Menu-detail">

      {/* Title */}
      <div className="px-4 lg:px-24 py-4">
        <h3 className="text-2xl lg:text-3xl  text-shadow-md text-shadow-zinc-400 ">
          Top dishes near you
        </h3>
      </div>

      {/* Food List */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-1 pl-1 pr-2 bg-gradient-to-br from-zinc-300 from-0% via-zinc-100 via-40% via-white via-70% to-zinc-200 to-100% bg-zinc-500 lg:px-35 py-3 ">

        {filteredFood <= 0 ? <span className="lg:h-[20vh] lg:text-shadow-md text-shadow-lg text-shadow-zinc-700 lg:text-shadow-zinc-700  h-[20vh] lg:bg-zinc-300 lg:w-[90vw] w-[90vw] lg:font-normal font-medium text-2xl py-3 px-2 lg:p-4">Food is Loading...</span> : filteredFood.map((items, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md relative p-3">

            {/* Image */}
            <div className="relative">
              <img
                src={url + "/image/" + items.image}
                alt=""
                className="w-full h-40 object-cover rounded-lg"
              />

              {/* Cart Button */}
              <div className="absolute bottom-3 right-3">

                {!cartItem[items._id] ? (
                  <img
                    src={FRassets.add_icon_white}
                    onClick={() => addtoCart(items._id)}
                    className="lg:w-11 w-8 cursor-pointer"
                  />
                ) : (
                  <div className="flex items-center gap-2 bg-white  relative px-1 py-1 rounded-full shadow">

                    <img
                      src={FRassets.add_icon_green}
                      onClick={() => addtoCart(items._id)}
                      className="lg:w-8 w-5 cursor-pointer"
                    />

                    <p className="lg:text-lg text-sm font-semibold">
                      {cartItem[items._id]}
                    </p>

                    <img
                      src={FRassets.remove_icon_red}
                      onClick={() => cartRemoveItem(items._id)}
                      className="lg:w-8 w-5 cursor-pointer"
                    />

                  </div>
                )}

              </div>
            </div>

            {/* Food Name */}
            <div className="flex justify-between items-center mt-2 ">
              <h2 className="font-semibold text-sm lg:text-base">
                {items.name}
              </h2>

              <Rating className={"lg:w-30 w-[14vw] lg:pl-auto lg:ml-33 ml-15 lg:bottom-3 bottom-3 absolute"} />
            </div>

            {/* Description */}
            <p className="text-gray-600 text-xs lg:text-sm mt-1 line-clamp-2">
              {items.description}
            </p>

            {/* Price */}
            <h2 className="text-amber-600 text-lg font-bold mt-1">
              ₹{items.price}
            </h2>

          </div>
        ))}

      </div>
    </div>
  )
}

export default MenuItems