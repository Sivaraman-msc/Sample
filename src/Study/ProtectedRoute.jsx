import React, { useEffect, useState } from 'react'
import { useAuth } from './AuthContext'
import { Outlet, useNavigate } from 'react-router-dom'

export default function ProtectedRoute({allowedEmail}) {
    const {submittedUser}=useAuth()
    const[unAuthorized,setunAuthorized]=useState(false)
    const navigate=useNavigate()
    
    useEffect(()=>{
        if(submittedUser && !allowedEmail.includes(submittedUser.email)){
            setunAuthorized(true)
        }
    },[submittedUser,allowedEmail])

    if(!submittedUser){
        navigate('/')
    }
    if(unAuthorized){
        return(
            <div>You're not allowed</div>
        )
    }
    return <Outlet />
}
