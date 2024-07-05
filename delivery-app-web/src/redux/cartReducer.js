import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { API_URL } from "../utils/constants/contants"
import toastr from 'toastr';



const INITIAL_STATE = {
    cartObj : {},
    totalCartUnit : 0
}



export const fetchCartList = createAsyncThunk('cart/get',
    async (data,{rejectWithValue}) => {
        try{
            const config = {
                headers:{
                    authorisation : `Bearer ${data}`
                }
            }
            const response = await axios.post(`${API_URL}/cart/get`,{},config);
            if(!response.data.success){
                toastr.error(response.data.message)
            }
            return response.data;
        }
        catch(error){
            console.error(error)
        }
    }
)

export const addToCart = createAsyncThunk('cart/add',
    async (data,{rejectWithValue}) => {
        try{
            const config = {
                headers:{
                    authorisation : `Bearer ${data.token}`
                }
            }
            const response = await axios.post(`${API_URL}/cart/add`,data.id,config);
            if(!response.data.success){
                toastr.error(response.data.message)
            }
            return response.data;
        }
        catch(error){
            return rejectWithValue(error.message)
        }
    }
)

export const removeFromCart = createAsyncThunk('cart/remove',
    async (data,{rejectWithValue}) => {
        try{
            const config = {
                headers:{
                    authorisation : `Bearer ${data.token}`
                }
            }
            const response = await axios.post(`${API_URL}/cart/remove`,data.id,config);
            if(!response.data.success){
                toastr.error(response.data.message)
            }
            return response.data;
        }
        catch(error){
            return rejectWithValue(error.message)
        }
    }
)

const cartSlicer = createSlice({
    name : "cart",
    initialState : INITIAL_STATE,
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(fetchCartList.pending ,(state,action) => {
            state.error = null;

        })
        builder.addCase(fetchCartList.fulfilled ,(state,action) => {
            state.cartObj = action.payload.data
            const count = Object.values(action.payload.data).filter(value => value > 0).length
            state.totalCartUnit =  count

        })
        builder.addCase(fetchCartList.rejected ,(state,action) => {
            state.error = action.payload;

        })
    }
})

export const {} = cartSlicer.actions;

export default cartSlicer.reducer;