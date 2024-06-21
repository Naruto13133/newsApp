import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { asyncThunkCreator } from "@reduxjs/toolkit";
import axios from "axios";



const initialState={
    username:"",
    name:"",
    email:"",
    age:"",
    phone:"",
    address:"",
    profilePic:"",
    coverPic:"",
    bio:"",
    followers:[],
    following:[],
    isAuth:false,
    token:"",
    error:"",
}

const authoriseuser =  createAsyncThunk('user/authriseuser',()=>{
    axios.post('http://localhost:8080/authorisation')
        .then(res => res.message)
})



const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers:{
        registration:(state,action)=>{

        }
    }
})

