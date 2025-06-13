import {configureStore} from '@reduxjs/toolkit'
import customerReducer from './slices/CustomerSlice'
import counterReducer from './slices/CounterSlice'
import userReducer from './slices/UserSlice'

export const store=configureStore({
    devTools:true,
    reducer:{
        customers:customerReducer,
        counter:counterReducer,
        user:userReducer
    }
})