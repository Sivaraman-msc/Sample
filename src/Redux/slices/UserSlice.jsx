import { createSlice } from "@reduxjs/toolkit"


const UserSlice=createSlice({
    name:'Data',
    initialState:[{}],
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
        },
        deleteUser:(state,action)=>{
           return state.filter((_,index)=>index!==action.payload)
        }
    }
})
export const {addUser,deleteUser}=UserSlice.actions
export default UserSlice.reducer