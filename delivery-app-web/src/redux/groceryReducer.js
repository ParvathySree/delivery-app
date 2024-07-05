import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { API_URL } from "../utils/constants/contants"
import toastr from 'toastr';


const INITIAL_STATE = {
    groceryList : []
}


export const fetchGroceries = createAsyncThunk('grocery',
    async (data,{rejectWithValue}) => {
        try{
            const config = {
                headers:{
                    authorisation : `Bearer ${data}`
                }
            }
            const response = await axios.get(`${API_URL}/grocery`,config);
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

const grocerySlicer = createSlice({
    name:"grocery",
    initialState: INITIAL_STATE,
    reducers:{},
    extraReducers : (builder) => {
        builder.addCase(fetchGroceries.pending ,(state,action) => {
            state.error = null;

        })
        builder.addCase(fetchGroceries.fulfilled ,(state,action) => {
            state.groceryList = action.payload.data

        })
        builder.addCase(fetchGroceries.rejected ,(state,action) => {
            state.error = action.payload;

        })
    }
})

export const {} = grocerySlicer.actions;


export default grocerySlicer.reducer;