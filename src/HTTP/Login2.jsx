import React, { useEffect, useState } from 'react'
import { UseAuth2 } from './useAuth'
import { useNavigate } from 'react-router-dom'
import { LoginAPI2 } from './UserAPI'

export default function Login2() {
    const[data,setData]=useState({
        email:'',
        password:''
    })
    const[message,setmessage]=useState('')
    const[error,setError]=useState('')
    const[visible,setVisible]=useState(true)
    const{user,login,loading}=UseAuth2()
    const navigate=useNavigate()

    const handleChange=(e)=>{
        const{name,value}=e.target
        setData((prev)=>({...prev,[name]:value}))
    }
    const handlepass=()=>{
        setVisible(!visible)
    }
    const handleClick=async(e)=>{
        e.preventDefault()
        try{
            const res=await LoginAPI2(data)

             login(res.user)
            setmessage('Login success')
            setError(false)
        }catch(err){
            console.log(err)
            setmessage('Something went wrong')
            setError('Error')
        }
    }

    useEffect(()=>{
        if(user){
            navigate('/home')
        }
    },[user,navigate])

    if(loading) return <p>Loading ....</p>
  return (
    <div>
        <form onSubmit={handleClick}>
            {error && <p>{error} </p> }
            <input type='email' name='email' value={data.email} placeholder='Email' onChange={handleChange} />
            <input type={visible?'text':'password'} name='password' value={data.password} placeholder='Password' onChange={handleChange} />
            <button onClick={handlepass}>{visible?'Hide':'Show'}</button>
            <button type='submit'>Submit</button>
            {message &&<p>m{message}</p> } 
        </form>
    </div>
  )
}
