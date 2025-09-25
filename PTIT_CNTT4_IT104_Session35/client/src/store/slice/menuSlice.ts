<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name:"menu",
    initialState:{
        flag:true
    },
    reducers:{
        handleClick : (state) => {
            state.flag = !state.flag
        }
    }
});
export const {handleClick} = menuSlice.actions
=======
import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name:"menu",
    initialState:{
        flag:true
    },
    reducers:{
        handleClick : (state) => {
            state.flag = !state.flag
        }
    }
});
export const {handleClick} = menuSlice.actions
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
export default menuSlice.reducer 