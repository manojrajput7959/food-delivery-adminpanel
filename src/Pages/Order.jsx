import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'
import { useEffect } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';
import Skeleton from '../components/Skeleton'


const Order = () => {

  const [orders, setOrder] = useState([])

  const fetchAllData = async () => {

    const response = await axios.get("https://food-delivery-backend-a6qk.onrender.com/api/food/userlist")

    if (response.data.success) {
      setOrder(response.data.data)
      lo
    } else {
      toast.error("Error")
    }

  }

  useEffect(() => {
    fetchAllData()
  }, [])


  const statushandler = async (e, orderId) => {
    const response = await axios.post("https://food-delivery-backend-a6qk.onrender.com/api/food/status", {
      orderId,
      status: e.target.value
    })

    if (response.data.success) {
      await fetchAllData()
    }
  }

  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6">

        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
          Orders Dashboard
        </h3>

        <div className="space-y-5">
          {orders.length === 0 ? <div >
            <Skeleton/>
            <Skeleton/>
            <Skeleton/>
          </div>
            : orders.map((order, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-5"
            >

              {/* TOP */}
              <div className="flex gap-4">

                {/* ICON */}
                <div className=" p-2 rounded-xl">
                  <img
                    src={assets.parcel_icon}
                    alt=""
                    className="w-8 h-8"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex-1 min-w-0">

                  {/* ITEMS */}
                  <p className="text-sm text-gray-700 truncate">
                    {order.items.map((item, i) =>
                      i === order.items.length - 1
                        ? `${item.name} × ${item.quantity}`
                        : `${item.name} × ${item.quantity}, `
                    )}
                  </p>

                  {/* NAME */}
                  <p className="text-sm font-semibold text-gray-900 mt-1">
                    {order.address.firstName} {order.address.lastName}
                  </p>

                  {/* ADDRESS */}
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {order.address.street}, {order.address.city}, {order.address.state}
                  </p>

                  {/* PHONE */}
                  <p className="text-xs text-gray-400 mt-1">
                    📞 {order.address.phone}
                  </p>
                </div>

              </div>

              {/* DIVIDER */}
              <div className="border-t border-gray-100 my-3"></div>

              {/* BOTTOM */}
              <div className="flex flex-wrap items-center justify-between gap-3">

                {/* LEFT INFO */}
                <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-600">
                  <span>🧾 {order.items.length} items</span>
                  <span className="font-semibold text-gray-800">
                    ₹{order.amount}
                  </span>
                </div>

                {/* STATUS + ACTION */}
                <div className="flex items-center gap-2">

                  {/* STATUS BADGE */}
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === "Delivered"
                      ? "bg-green-100 text-green-600"
                      : order.status === "Out for delivery"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    {order.status}
                  </span>

                  {/* SELECT */}
                  <select onChange={(e) => statushandler(e, order._id)} value={order.status}
                    className="text-xs sm:text-sm bg-white border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400">
                    <option>Food processing</option>
                    <option>Out for delivery</option>
                    <option>Delivered</option>
                  </select>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Order
