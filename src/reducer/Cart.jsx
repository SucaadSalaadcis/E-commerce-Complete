import { createSlice } from "@reduxjs/toolkit";
//reducer first
const Cart= createSlice({
    name:'cart',
    initialState:{
        cartItem:[],
        totalPrice:0,
    },
    reducers:{
        addCart:(state,action)=>{
       state.cartItem.push(action.payload)
        },
        removeItemFromCart:(state,action)=>{
            let itemID = action.payload
            state.cartItem = state.cartItem.filter((item) => item.id != itemID.id )
        },
        calculateTotalPrice: (state) => {
        let total = 0
        state.cartItem.forEach((item) => {
         total += item.price;
        })
          state.totalPrice = total;
        }


    }
})
export const{addCart, removeItemFromCart,calculateTotalPrice}= Cart.actions
export default Cart.reducer