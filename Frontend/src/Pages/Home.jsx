import React, { useContext, useState } from 'react'
import Header from '../Components/Header'
import Menu from './Menu'
import MenuExplore from '../Components/MenuExplore'
import MenuItems from '../Components/MenuItems'
import Footer from '../Components/Footer'
import Payment from '../Components/Payment'
import PlayStore from '../Components/PlayStore'
import BottomCart from '../Components/BottomCart'
import { StoreContext } from '../Components/AllState'
import { useNavigate } from 'react-router-dom'


const Home = ({ showLogin }) => {
  const [category, setCategory] = useState("All")
  const { cartItem } = useContext(StoreContext)

  // const navigate = useNavigate()

  let checkItem = Object.values(cartItem).some((item) => item > 0)

  // console.log(cartItem)

  return (
    <div className={showLogin ? "backdrop-blur-lg bg-black/90" : ""}>
      <Header />
      <MenuExplore category={category} setCategory={setCategory} />
      <MenuItems category={category} />
      <PlayStore />
      {checkItem && <BottomCart toredirect = {"/cart"} />}
      {/* <BottomCart/> */}
    </div>
  )
}

export default Home
