import axios from 'axios'
import cookie from 'js-cookie'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addUserCrud } from './Redux/CrudSlice'

export default function CreateCrud() {
    const[data,setData]=useState({name:'',email:'',password:''})
    const[message,setMessage]=useState('')
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleChange=(e)=>{
        const{name,value}=e.target
        setData((prev)=>({...prev,[name]:value}))
    }
    const handleClick=async(e)=>{
        e.preventDefault()
        try{
            const res=await axios.post('http://localhost:3000/Crud',data)
            setMessage('Signup Successfull')
            cookie.set('user',JSON.stringify(res.data.user))
            dispatch(addUserCrud(data))
            navigate('/get')
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div>
        <form onSubmit={handleClick}>
            <input type="text" name='name' value={data.name} placeholder='name' onChange={handleChange} />
            <input type="email" name='email' value={data.email} onChange={handleChange} />
            <input type="password" name='password' value={data.password} onChange={handleChange} />
            <button>Submit</button>
        </form>
        {message && <p>{message}</p>}
    </div>
  )
}
