import { configureStore } from "@reduxjs/toolkit";
import user_slice from "./slices/uerSlice"
const store =configureStore({
    reducer:{
        user:user_slice
    }
})

export default store;