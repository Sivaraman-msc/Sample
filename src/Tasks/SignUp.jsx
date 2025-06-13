import React, { useState } from 'react'
import UseAuthTask from './AuthProvider'
import cookie from 'js-cookie'
import { SignUpTaskService } from './AuthService'
import { useNavigate } from 'react-router-dom'

export default function SignUpTask() {
    const[formdata,setformdata]=useState({
        name:'',
        email:'',
        password:'',
        image:null
    })
    const[message,setmessage]=useState('')
    const{setSubmittedUser}=UseAuthTask()
    const navigate=useNavigate()
    const handleChange=(e)=>{
        const{name,value,files}=e.target
        if(name==='image'){
            setformdata((prev)=>({...prev,image:files[0]}))
        }else{
            setformdata((prev)=>({...prev,[name]:value}))
        }
    }

    const handleClick=async(e)=>{
        e.preventDefault()

        try{
            const res=await SignUpTaskService(formdata)
            setSubmittedUser(res.data)
            cookie.set('user',res.token,{expires:30,secure:true,sameSite:'strict'})
            setmessage('SignUp Successfull')
            navigate('/home')
        }catch(err){
            console.log(err)
            setmessage('Something went wrong')
        }
    }

  return (
    <>
   <form onSubmit={handleClick}>
     <input type="text" name='name' value={formdata.name} onChange={handleChange} />
     <input type="email" name='email' value={formdata.email} onChange={handleChange} />
     <input type="password" name='password' value={formdata.password} onChange={handleChange} />
     <input type="file" name='image' onChange={handleChange} />
     <button type='submit'>Submit</button>
     {message && <p>{message}</p>}
   </form>
    </>
  )
}
