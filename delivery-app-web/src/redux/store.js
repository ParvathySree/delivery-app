import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import groceryReducer from "./groceryReducer";
import userReducer from "./userReducer";


 export const store = configureStore({
    reducer : {
        user : userReducer,
        grocery : groceryReducer,
        cart : cartReducer
    }
})

