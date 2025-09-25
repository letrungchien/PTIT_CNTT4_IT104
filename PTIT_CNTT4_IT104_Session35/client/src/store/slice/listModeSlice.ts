<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const listModeSlice = createSlice({
    name:"listMode",
    initialState:{
        status:true
    },
    reducers:{
        compact : (state) => {
            state.status = !state.status
        }
    }
})

export const {compact} = listModeSlice.actions
=======
import { createSlice } from "@reduxjs/toolkit";

const listModeSlice = createSlice({
    name:"listMode",
    initialState:{
        status:true
    },
    reducers:{
        compact : (state) => {
            state.status = !state.status
        }
    }
})

export const {compact} = listModeSlice.actions
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
export default listModeSlice.reducer