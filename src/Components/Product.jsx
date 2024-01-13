import React from 'react'
import { addCart } from '../reducer/Cart'
import { useDispatch } from 'react-redux'

function Product({product}) {
  const Dishpatch=useDispatch()
  const handleadcart=()=>{
    Dishpatch(addCart(product))
  }

  return (
    <div className='sm:mt-10  mt-10 w-full border-2 border-gray-500 p-3 rounded md:mt-20'>
      <img src={product.image}/>
   <div className='flex justify-between mt-3  text-2xl'>
   <h1 className='font-semibold'>{product.name}</h1>
    <h1 className='font-bold'>{product.price}</h1>
   </div>
   <button onClick={handleadcart} className='bg-orange-400 cursor-pointer px-20 text-white rounded mt-5 py-2 '>Add to Cart</button>
    </div>
  )
  //Distructing wa datada datebase ka so qaad
}

export default Product
