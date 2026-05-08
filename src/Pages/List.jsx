import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'
import { FRassets } from '../assets/FRassets'

const List = () => {
  const [getData, setGetData] = useState([])

  const serverData = async () => {

    const listData = await axios.get("https://food-delivery-backend-a6qk.onrender.com/api/food/List")
    console.log(listData.data)
    if (listData.data.success) {
      setGetData(listData.data.data) //means we geeting only data array not whole json if we want whole json then (listData.data)
    } else {
      toast.error("Server returned an error!")
    }
  }

  const removeItem = async(foodId)=>{
       const removeFood = await axios.post("http://localhost:4000/api/food/remove",{id:foodId})
       await serverData()
       if(removeFood.data.success){
        toast.success(removeFood.data.message)
       }else{
        toast.error("Error")
       }
  }


  useEffect(() => {
    serverData()
  }, [])

  return (
    <div>
      <div className='pl-10 pt-8'>
        <h1 className='text-xl text-zinc-700 font-medium'>All Foods List</h1>
      </div>

      <div className='ml-10 mt-3 pt-2 h-10 w-[70vw] border border-zinc-400 text-zinc-600 flex justify-between'>
        <div className='pl-4 w-[13vw] flex justify-between'>
          <b>Images</b>
          <b>Name</b>
        </div>
        <div className='pr-10 w-[30vw] flex justify-between'>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
      </div>

      {getData.map((items) => (
        <div key={items._id} className="flex justify-between border-b-2 border-l-2  border-r-2  border-zinc-200 ml-10 w-[70vw] h-[10vh]">
          <div className="flex items-center w-[30vw]">
            <img src={`https://food-delivery-backend-a6qk.onrender.com/image/${items.image}`} alt={items.name} className="w-14 h-14 object-contain  ml-2" />
            <p className='ml-18'>{items.name}</p>
          </div>
          <div className="flex  items-center w-[30.5vw] justify-between pr-15 text-left">
            <p className=' w-[5vw]'>{items.category}</p>
            <p className='pr-1'>${items.price}</p>
            <img onClick={()=>{removeItem(items._id)}} src={FRassets.cross_icon} alt="delete" className="cursor-pointer  w-[4%]" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default List
