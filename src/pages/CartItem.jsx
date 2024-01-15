import { useDispatch } from "react-redux"
import { calculateTotalPrice, removeItemFromCart } from "../reducer/Cart";


function CartItem({items}) {
    const disptch = useDispatch();

    const handleRemove = () => {
     disptch(removeItemFromCart(items))
     disptch(calculateTotalPrice())
    }
    
  return (
    <div className='pt-28 '>
  
    <div className='border-2 border-gray-300 w-[50%] h-[120px]  flex ml-[340px] shadow-lg'>
    <img className=' w-[140px] h-[90px] mt-3 border-2 border-gray-300 ml-5 ' src={items.image} alt="" />
    <p className='ml-20 font-bold mt-10'>{items.name}</p>
    <p className='ml-20 font-bold mt-10'>{items.price}</p>
    <button onClick={handleRemove} className='ml-20 font-bold mt-10 h-[30px] w-[70px] rounded-md bg-red-400'>remove</button>
    </div>
   
    </div>
  )
}

export default CartItem