import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
}

const AuthSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        addUser2:(state,action)=>{
            state.user=action.payload
        }
    }
})

export const {addUser2}=AuthSlice.actions
export default AuthSlice.reducer