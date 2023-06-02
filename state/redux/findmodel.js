import { createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
export const brandmodelData = createAsyncThunk('model',async(body)=>{
    const instance = axios.create({
        baseURL: 'http://localhost:3000/api', // Set the base URL for all requests
        timeout: 5000, // Set the request timeout in milliseconds
        headers: {
            Accept:'application/json',
          'Content-Type': 'application/json', // Set the default content type header
          // Add other default headers if needed
        },
      });
      
      // Use the created instance to make HTTP requests
     const data = await  instance.get(`/brand?brandmodel=${body}`)
        return  data.data
})
const modelSlice = createSlice({
    name:'model',
    initialState:{
     isLoading:true,
      datas:[],
      
     isError:false
    },
    reducers:{
     
    },
    extraReducers:builder=>{
       builder
       .addCase(brandmodelData.pending,(state)=>{
        state.isLoading = true
       })
       .addCase(brandmodelData.fulfilled,(state,{payload})=>{
    
        state.isLoading = false
        state.datas = payload
      
        state.isError = false
       })
       .addCase(brandmodelData.rejected,(state)=>{
        state.isLoading = false
        state.isError = true 
       })
    }
})
export default modelSlice.reducer
