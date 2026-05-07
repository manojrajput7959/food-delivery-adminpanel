import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify';

const Add = () => {

  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: ""
  })

  const getData = (e) => {

    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    console.log(data)

  }, [data])

  const submitData = async (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("description",data.description)
    formData.append("category",data.category)
    formData.append("price", Number(data.price))
    formData.append("image", image)

    try {
      const addData = await axios.post("https://food-delivery-backend-a6qk.onrender.com/api/food/add", formData)
      if (addData.data.success) {
        setData({
          name: "",
          description: "",
          category: "",
          price: ""
        })
       setImage(false)
      toast.success(addData.data.message);
      }
      else{
          toast.error(addData.data.message)
      }

    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div className='pl-10'>
      <form onSubmit={submitData}>
        <div className='py-8'>
          <p>upload image</p>
          <label htmlFor="image" className='cursor-pointer'>
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" className='w-[8vw]' />
          </label>
          <input id='image' onChange={(e) => setImage(e.target.files[0])} type="file" hidden required />
        </div>

        <div className='pb-8'>
          <p className='pb-1' >Product name</p>
          <input onChange={(e) => getData(e)} value={data.name} type="text" placeholder='Type here' name='name' className='border border-gray-600 pl-2 outline-none w-[30vw] h-[2.5vw]' required />
        </div>

        <div className='y-8 w-[25vw] h-[20vh]'>
          <p>Product description</p>
          <textarea onChange={(e) => getData(e)} value={data.description} type="text" placeholder='write comment here' name='description' className=' pl-2 w-[30vw] h-[18vh] border border-gray-600 outline-none' required />
        </div>

        <div className='py-8 flex '>
          <div className=''>
            <p>Product category</p>
            <select name="category" onChange={(e) => getData(e)} className='w-[13vw] border border-gray-600 outline-none h-[5vh]'>
              <option value="">Categories</option>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className='pl-8'>
            <p>Product Price</p>
            <input onChange={(e) =>getData(e)} value={data.price} type="number" name='price' className='w-[13vw] border border-gray-600 outline-none pl-3 h-[5vh]' />
          </div>
        </div>
        <button type="submit" className="py-2 pr-14 pl-4  bg-black text-white">ADD</button>
      </form>
    </div>
  )
}

export default Add
