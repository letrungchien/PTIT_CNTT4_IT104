import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllTask= createAsyncThunk("getAllTask" ,
    async ()=>{
        try {
            const response =await axios.get("http://localhost:8080/tasks");
            
            return response.data
        } catch (error) {
            console.log(error);
            
        }
    })

    const taskSlice =createSlice({
        name:"tasks",
        initialState:{
            tasks:[]
        },
        reducers:{},
        extraReducers:(builder)=>{
            builder
            .addCase(getAllTask.pending,()=>{
                console.log("dang trong qua trinh sua ly");
                
            })
            .addCase(getAllTask.fulfilled,(state,action)=>{
                console.log("lay du lieu thanh cong");
                state.tasks=action.payload
                
            })
            .addCase(getAllTask.rejected,()=>{
                console.log("lay du leu that bai");
                
            })
        }
    })

    export default taskSlice.reducer;