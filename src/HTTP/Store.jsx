import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './AuthSlice'

export const newStore=configureStore({
  devTools:true,
  reducer:{
    Auth:AuthReducer
  }
})
