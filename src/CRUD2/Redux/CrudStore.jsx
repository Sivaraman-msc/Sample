import { configureStore } from '@reduxjs/toolkit'
import CrudReducer from './CrudSlice'

export const CrudStore=configureStore({
    devTools:true,
    reducer:{
        crud:CrudReducer
    }
})