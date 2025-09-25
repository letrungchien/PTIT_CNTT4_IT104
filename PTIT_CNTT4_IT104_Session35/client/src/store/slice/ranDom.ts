<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";


const ranDom = createSlice({
    name:"ranDom",
    initialState:{
        arr : []
    },
    reducers:{
        random : (state) => {
            const number : number = Math.floor(Math.random() * 99);
            state.arr.push(number);
        }
    }
})

export const { random } = ranDom.actions
=======
import { createSlice } from "@reduxjs/toolkit";


const ranDom = createSlice({
    name:"ranDom",
    initialState:{
        arr : []
    },
    reducers:{
        random : (state) => {
            const number : number = Math.floor(Math.random() * 99);
            state.arr.push(number);
        }
    }
})

export const { random } = ranDom.actions
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
export default ranDom.reducer