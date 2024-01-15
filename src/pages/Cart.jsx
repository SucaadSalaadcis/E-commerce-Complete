import React, { useEffect } from 'react'
import Header from '../Components/Header'
import CartItem from './CartItem'
import { useSelector,useDispatch } from 'react-redux'
import { calculateTotalPrice } from '../reducer/Cart';

function Cart() {
    const cartItems = useSelector((state) => state.cart.cartItem);
    const price = useSelector((state) => state.cart.totalPrice)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(calculateTotalPrice())
    })
  return (
    <div>
        <Header/>
    {
     cartItems.length > 0 && cartItems.map((items) => {
        return <CartItem items={items}/>
      })
      
    } 
    {

    cartItems.length > 0 ? <div><p className='ml-[250px] mt-5'>Total price</p>
    <hr className='h-[1.2px] mx-[250px] bg-black text-black '/>
    <h1 className='text-3xl ml-[250px] font-bold my-10'>{price}</h1>
    </div> 
    :
      <h1 className='pt-[100px] font-bold text-center'>Your Cart Is Empty</h1>
    }
    </div>
  )
}

export default Cart