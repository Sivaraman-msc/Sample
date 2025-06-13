import React, { Children, useContext, useEffect, useState } from 'react'
import cookie from 'js-cookie'
import { GetUserbyIdAPI2 } from './UserAPI'
import { AuthContext } from './AuthContext'

export default function AuthProvider2({children}) {
    const[user,setuser]=useState(null)
    const[loading,setLoading]=useState(true)

    const login=async(userData)=>{
        setuser(userData)
    }

    const logout=async()=>{
        setuser(null)
    }

    useEffect(()=>{
        const fetchdata=async()=>{
            try{
                const storedData=cookie.get('user')
            if(storedData){
                const userId=await JSON.parse(storedData)?._id
                const res=await GetUserbyIdAPI2(userId)
                setuser(res.data)
            }
            }catch(err){
                console.log(err)
            } finally{
                setLoading(false)
            }
        }
        fetchdata()
    },[])

    useEffect(()=>{
        if(user){
            console.log("User changed in context:", user)
        cookie.set('user',JSON.stringify(user),{expires:30})
    }else{
        cookie.remove('user')
    }
    },[user])
  return (
    <AuthContext.Provider value={{user,loading,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}
export function useAuth2() {
  return useContext(AuthContext);
}
