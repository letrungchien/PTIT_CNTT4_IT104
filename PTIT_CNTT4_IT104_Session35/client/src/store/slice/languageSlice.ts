<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: "en", 
  },
  reducers: {
    change: (state, action) => {
      state.lang = action.payload; 
    },
  },
});

export const { change } = languageSlice.actions;
export default languageSlice.reducer;
=======
import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: "en", 
  },
  reducers: {
    change: (state, action) => {
      state.lang = action.payload; 
    },
  },
});

export const { change } = languageSlice.actions;
export default languageSlice.reducer;
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
