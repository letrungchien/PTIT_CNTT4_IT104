<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";


const studenSlice =createSlice({
    name:"student",
    initialState:{
        students:[
            {
                id:1,
                name:"Minh Thu"
            },
            {
                id:2,
                name:"Yen Chi"
            }
        ],
    },
    reducers:{
      addStudent:(state,action)=>{
    
         state.students.push(action.payload)
      },
      deleteStudent: (state, action) => {
  return {
    ...state,
    students: state.students.filter((item) => item.id !== action.payload.id),
  };
}

    },
})
export const {deleteStudent}=studenSlice.actions;
export const {addStudent}=studenSlice.actions;
=======
import { createSlice } from "@reduxjs/toolkit";


const studenSlice =createSlice({
    name:"student",
    initialState:{
        students:[
            {
                id:1,
                name:"Minh Thu"
            },
            {
                id:2,
                name:"Yen Chi"
            }
        ],
    },
    reducers:{
      addStudent:(state,action)=>{
    
         state.students.push(action.payload)
      },
      deleteStudent: (state, action) => {
  return {
    ...state,
    students: state.students.filter((item) => item.id !== action.payload.id),
  };
}

    },
})
export const {deleteStudent}=studenSlice.actions;
export const {addStudent}=studenSlice.actions;
>>>>>>> a449ceaeb65d090a6defb22f516d69388f439848
export default studenSlice.reducer;