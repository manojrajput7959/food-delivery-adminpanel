import React, { useContext, useState } from 'react'
import { StoreContext } from '../Components/AllState'
import { useNavigate } from 'react-router-dom'

const PlaceHolder = () => {

  const { getSubTotal } = useContext(StoreContext)
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: ''
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    // check empty fields
    for (let key in form) {
      if (!form[key]) {
        setError('Please fill all fields')
        return
      }
    }

    setError('')
    navigate('/Payment')
  }

  return (
    <div className="px-4 lg:px-24 pt-20 mt-15">

      <div className="flex flex-col lg:flex-row justify-between gap-10">

        {/* LEFT */}
        <div className="w-full lg:w-5/12">
          <h2 className="lg:text-4xl text-3xl mb-4 text-shadow-zinc-800 text-shadow-md ">Delivery Information</h2>

          <div className="space-y-3">

            <div className="flex gap-3">
              <input name="firstName" onChange={handleChange} placeholder="First name" className="w-full border pl-3 h-10"/>
              <input name="lastName" onChange={handleChange} placeholder="Last name" className="w-full border pl-3 h-10"/>
            </div>

            <input name="email" onChange={handleChange} placeholder="Email" className="w-full border pl-3 h-10"/>

            <input name="street" onChange={handleChange} placeholder="Street" className="w-full border pl-3 h-10"/>

            <div className="flex gap-3">
              <input name="city" onChange={handleChange} placeholder="City" className="w-full border pl-3 h-10"/>
              <input name="state" onChange={handleChange} placeholder="State" className="w-full border pl-3 h-10"/>
            </div>

            <div className="flex gap-3">
              <input name="zip" onChange={handleChange} placeholder="Zipcode" className="w-full border pl-3 h-10"/>
              <input name="country" onChange={handleChange} placeholder="Country" className="w-full border pl-3 h-10"/>
            </div>

            <input name="phone" onChange={handleChange} placeholder="Phone" className="w-full border pl-3 h-10"/>
          </div>

          {/* ERROR MESSAGE */}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-6/12">
          <h1 className="text-3xl text-shadow-zinc-700 text-shadow-md ">Cart Totals</h1>

          <div className="mt-4 space-y-2 w-full lg:w-9/12">

            <div className="flex justify-between">
              <h2>Subtotal</h2>
              <p>₹ {getSubTotal()}</p>
            </div>

            <div className="flex justify-between">
              <h2>Delivery Fee</h2>
              <p>₹ {getSubTotal() === 0 ? 0 : 5}</p>
            </div>

            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹ {getSubTotal() === 0 ? 0 : getSubTotal() + 5}</span>
            </div>
          </div>

          <div className="mt-5">
            <button
              onClick={handleSubmit}
              className="bg-orange-500 py-2 px-4 text-white"
            >
              Proceed to Payment
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PlaceHolder