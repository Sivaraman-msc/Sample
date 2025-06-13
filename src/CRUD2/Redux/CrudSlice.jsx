import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:null
}

const CrudSlice=createSlice({
    name:'Auth',
    initialState,
    reducers:{
        addUserCrud(state,action){
            state.user=action.payload
        }
    }
})
export const {addUserCrud}=CrudSlice.actions
export default CrudSlice.reducer