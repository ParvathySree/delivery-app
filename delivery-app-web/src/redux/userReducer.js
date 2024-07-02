import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

const API_URL = import.meta.env.VITE_API_BASE_URL;
const INITIAL_STATE = {
    currentUser: null,
    loading: false,
    error: null,
    token:null
}

//API call to login to the application
export const loginUser = createAsyncThunk('user/login',
    async (data,{rejectWithValue}) => {
        try{
            const response = await axios.post(`${API_URL}/user/login`, data);
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

//API call to signup to the application
export const signupUser = createAsyncThunk('user/signup',
    async (data,{rejectWithValue}) => {
        try{
            const response = await axios.post(`${API_URL}/user/signup`, data);
            if(!response.data.success){
                toastr.error(response.data.message)
            }else{
                toastr.success(response.data.message)
            }
            return response.data;
        }
        catch(error){
            return rejectWithValue(error.message)
        }
    }
)

const userSlice = createSlice({
    name : "user",
    initialState:INITIAL_STATE,
    reducers:{
        setLoader(state,action) {
            state.loading = action.payload;
        },
    },
    extraReducers : (builder) => {
        builder.addCase(loginUser.pending ,(state,action) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(loginUser.fulfilled ,(state,action) => {
            state.loading = false;
            state.currentUser = action.payload.email;
            state.token = action.payload.token;

        })
        builder.addCase(loginUser.rejected ,(state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(signupUser.pending ,(state,action) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(signupUser.fulfilled ,(state,action) => {
            state.loading = false;
            state.error = null;
        })
        builder.addCase(signupUser.rejected ,(state,action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export const { setLoader } = userSlice.actions;
export default userSlice.reducer;