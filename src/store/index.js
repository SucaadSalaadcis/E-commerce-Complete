import { configureStore } from "@reduxjs/toolkit";
import Cart from "../reducer/Cart";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const config = {
    key:"root",
    storage
}

const AllReducers = combineReducers({
    cart:Cart,

})

// waxlakeydinayo io mesha lgu keydinayo
const reducers = persistReducer(config,AllReducers)

const store = configureStore({
   reducer:reducers
})


export default store