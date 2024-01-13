import { configureStore } from "@reduxjs/toolkit";
import Cart from "../reducer/Cart";
const store =configureStore({
    reducer:{
        cart:Cart
    }
})
export default store