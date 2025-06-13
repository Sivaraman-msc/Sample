import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cookie from 'js-cookie'

export default function CookieLogin() {
    const [formdata,setFormdata]=useState({
        email:'',
        password:''
    })
    const [message,setMessage]=useState('')
    const [error,setError]=useState(false)

    const navigate=useNavigate()

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormdata((prev)=>({...prev,[name]:value}))
    }

    const handleClick=async(e)=>{
        e.preventDefault()
        try{
            const storage=JSON.parse(cookie.get('user'))

            if(storage && storage.email===formdata.email && storage.password===formdata.password){
                console.log("Login success")
                setMessage('Login sucessfull')
                setError(false)
                navigate('/dashboard')
            }
        }catch(err){
            console.log("Login Error",err)
            setError(true)
            setMessage("Something went wrong")
        }
    }
  return (
    <>
    <form onSubmit={handleClick}>
        {error && <p>{error}</p>}
        <input type='email' name='email' value={formdata.email} onChange={handleChange} placeholder='Enter your email ID' />
        <input type='password' name='password' value={formdata.password} onChange={handleChange} placeholder='Password' />
        <button type='submit'>Login</button>
        <Link to='/signup'>Don't have an Account ? Sign Up</Link>
        {message && <p>{message}</p>}
    </form>

    </>
  )
}
