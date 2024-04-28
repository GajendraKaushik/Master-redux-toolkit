import { createSlice } from "@reduxjs/toolkit"

const initialAuthState = {isLogin:true, logOut:false}

export const authSlice = createSlice({
  name:'auth',
  initialState : initialAuthState,
  reducers:{
    userlogIn(state){
      state.isLogin = !state.isLogin
    },
    userlogOut(state){
      state.isLogin = !state.isLogin
    }
  } 
})

export const authActions = authSlice.actions;