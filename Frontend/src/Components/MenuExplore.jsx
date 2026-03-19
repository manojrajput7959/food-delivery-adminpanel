import React from "react"
import { menu_list } from "../assets/frontend_assets/FRassets"

const MenuExplore = ({ category, setCategory }) => {
  return (
    <div className="w-full" id="Menu-item">

      {/* Heading */}
      <div className="px-4 mt-12 lg:px-24">
        <h2 className="py-3 text-3xl  leading-tight lg:text-4xl  pt-20 font-medium text-shadow-lg text-shadow-zinc-400">
          Explore our menu
        </h2>

        <p className="text-sm text-gray-700 max-w-xl">
          Choose from a diverse menu featuring a delectable array of dishes.
        </p>
      </div>

      {/* Menu List */}
      <div className="flex gap-6 overflow-x-auto px-4 py-5 lg:justify-between lg:overflow-hidden lg:px-24">

        {menu_list.map((items, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-w-[80px] cursor-pointer"
            onClick={() =>
              setCategory(prev =>
                prev === items.menu_name ? "All" : items.menu_name
              )
            }
          >
            <img
              src={items.menu_image}
              alt=""
              className={
                category === items.menu_name
                  ? "w-16 h-16 lg:w-24 lg:h-24 border-4 border-amber-600 rounded-full scale-105 transition "
                  : "w-16 h-16 lg:w-24 lg:h-24 rounded-full "
              }
            />

            <p className="text-sm black mt-2 text-center lg:text-shadow-sm lg:text-shadow-zinc-400 text-shadow-md text-shadow-zinc-400">
              {items.menu_name}
            </p>
          </div>
        ))}

      </div>

      {/* Divider */}
      <hr className="w-11/12 mx-auto bg-gray-400 text-zinc-400 h-[0.1vh]" />

    </div>
  )
}

export default MenuExplore