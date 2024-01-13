import React from 'react'
import Header from '../Components/Header'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItem)
  return (
    <div>
        <Header/>
    {
      cartItems.map((items) => {
        return <CartItem items={items}/>
      })
    }
       
    </div>
  )
}

export default Cart