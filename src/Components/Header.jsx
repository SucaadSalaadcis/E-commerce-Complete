import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
const cartvalue=useSelector((state)=>state.cart.cartItem)

   const[isOpen, setisOpen] = useState(false)
   const handleisOpen =() => {
    setisOpen(true)
   }
   const handleClose =() => {
    setisOpen(false)
   }

  return (
    <div className='bg-orange-400 fixed w-full flex text-white p-3 justify-between'>
      <h1  className='sm:text-4xl  text-2xl font-bold '>Ecommerce</h1>
      <i onClick={handleisOpen} style={{display:isOpen === true ? "none" : ""}} class="fa-solid fa-bars absolute right-2 text-3xl sm:hidden text-white"></i>

    <i onClick={handleClose} style={{display:isOpen ===true ? "block" : "none"}} class="fa-solid fa-x  hidden absolute right-2 text-4xl text-white "></i>

      <ul  style={{display:isOpen === true ? "block" : ""}}  
      className='hidden sm:flex flex-col sm:flex-row  gap-5 mt-10 sm:mt-0 sm:gap-20  sm:text-4xl text-2xl'>
        <Link to="/"  className='hover:cursor-pointer hover:underline' >Home</Link>
        <li className='hover:cursor-pointer hover:underline'>About</li>
        <li   className='hover:cursor-pointer hover:underline'>Contact</li>
      </ul>
      <ol className='text-3xl mr-[80px] ' >
        <Link to="/cart">
       <i class="fa-solid fa-cart-shopping">{cartvalue.length}</i>
        </Link>
         <h1></h1>
      </ol>
    </div>
  )
}

export default Header
