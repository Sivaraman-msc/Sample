import React, { useEffect, useState } from 'react'
import { RegisterAPI2 } from './UserAPI'
import { UseAuth2 } from './useAuth'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser2 } from './AuthSlice'

export default function SignUp2() {
    const[formdata,setFormdata]=useState({
        name:'',
        email:'',
        age:'',
        role:'',
        password:'',
        profile:null
    })
    const[error,setError]=useState(false)
    const[message,setMessage]=useState('')
    const{user,login,loading}=UseAuth2()
    const navigate=useNavigate()
    const dispatch=useDispatch()

    const handleChange=(e)=>{
      const{name,value,files}=e.target 
      if(name==='profile'){
        setFormdata((prev)=>({...prev,profile:files[0]}))
      }else{
        setFormdata((prev)=>({...prev,[name]:value}))
      }
    }

    const handleClick=async(e)=>{
      e.preventDefault()
      try{
        const res=await RegisterAPI2(formdata)
        await login(res.user)
        dispatch(addUser2(res.user))
        setMessage('Signup Successfull')
        setError(false)

      }catch(err){
        console.log(err)
        setMessage('Something went wrong')
        setError('Invalid Credentials')
      }
    }

    useEffect(()=>{
      if(user){
        navigate('/home')
      }
    },[user,navigate])

    if(loading) return <p>Loading...</p>
  return (
    <div>
      <form onSubmit={handleClick}>
        {error && <p>{error}</p>}
        <input type="text" value={formdata.name} name='name' onChange={handleChange} placeholder='Enter your name' />
        <input type="email" value={formdata.email} name='email' onChange={handleChange} placeholder='Enter your email id' />
        <input type="number" value={formdata.age} name='age' onChange={handleChange} placeholder='Enter your age' />
        <select onChange={handleChange} name='role' value={formdata.role}>
          <option value="">Select Role</option>
          <option value="Developer">Developer</option>
          <option value="Tester">Tester</option>
          <option value="ProjectManager">ProjectManager</option>
        </select>
        <input type="password" value={formdata.password} name='password' onChange={handleChange} placeholder='New password' />
        <input type="file" name='profile' onChange={handleChange} />
        <button type='submit'>Submit</button>
        {message && <p>{message}</p> }
      </form>
      <Link to='/login'>Already have account ?</Link>
    </div>
  )
}
