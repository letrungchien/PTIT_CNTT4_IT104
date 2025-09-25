<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import user_slice from "./slices/uerSlice"
import task_slice from "./slices/taskSlice"
const store =configureStore({
    reducer:{
        user:user_slice,
        task:task_slice
    }
})

=======
import { configureStore } from "@reduxjs/toolkit";
import user_slice from "./slices/uerSlice"
import task_slice from "./slices/taskSlice"
const store =configureStore({
    reducer:{
        user:user_slice,
        task:task_slice
    }
})

>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
export default store;