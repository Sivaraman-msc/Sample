import React, { useEffect, useState } from 'react'
import { useAuth } from './AuthContext'

export default function UpdateUser() {

    const [formdata,setFormdata]=useState({
        name:'',
        email:'',
        password:'',
        profile:null
    })
    const{submittedUser}=useAuth()

    useEffect(()=>{
        if(submittedUser){
            setFormdata({
                name:submittedUser.name ||'',
                email:submittedUser.email || '',
                password:submittedUser.password || '',
                profile:submittedUser.profile ||''
            })
        }
    },[submittedUser])

    const handleChange=(e)=>{
        const {name,value,files}=e.target
        if(name==='profile'){
            setFormdata((prev)=>({...prev,profile:files[0]}))
        }else{
            setFormdata((prev)=>({...prev,[name]:value}))
        }
    }
    const onsubmit=(e)=>{
        e.preventDefault()
        console.log(formdata)
    }
  return (
    <>
    <form onSubmit={onsubmit}>
        <input name='name' value={formdata.name} onChange={handleChange} />
        <input name='email' value={formdata.email} onChange={handleChange} />
        <input name='password' value={formdata.password} onChange={handleChange} />
        <input type="file" onChange={handleChange} />
        {formdata?.profile && (<img src={formdata.profile} alt='image' />)}
        <button type='submit'>Click</button>
    </form>
    </>
  )
}
