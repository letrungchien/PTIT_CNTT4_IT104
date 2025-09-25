<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

export const darkSlice = createSlice({
    name:"dark",
    initialState:{
        isDarkMode: true

    },
    reducers:{
        toggleTheme : (state) => {
            state.isDarkMode = !state.isDarkMode
        }
    }
})
export const {  toggleTheme } = darkSlice.actions
=======
import { createSlice } from "@reduxjs/toolkit";

export const darkSlice = createSlice({
    name:"dark",
    initialState:{
        isDarkMode: true

    },
    reducers:{
        toggleTheme : (state) => {
            state.isDarkMode = !state.isDarkMode
        }
    }
})
export const {  toggleTheme } = darkSlice.actions
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
export default darkSlice.reducer