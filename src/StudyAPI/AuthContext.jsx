import {createContext,useState,useEffect} from 'react'
import cookie from 'js-cookie'

export const AuthContext=createContext()

export default function AuthProvider1({children}){
    const [user,setuser]=useState(null)

    const login=async(userdata)=>{
        setuser(userdata)
    }
    const logout=()=>{
        setuser(null)
    }
    useEffect(()=>{
        if(user){
        cookie.set('user',JSON.stringfy(user),{expires:30})
    }else{
        cookie.remove('user')
    }
    },[user])
    return(
        <AuthContext.Provider value={{user,login,logout}}>
        {children}
        </AuthContext.Provider>
    )
}