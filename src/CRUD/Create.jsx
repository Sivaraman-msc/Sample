import React, { useState } from 'react'
import axios from 'axios'

export default function Create() {

    const [users,setusers]=useState({
        name:'',
        email:''
    })

    const handleChange=(e)=>{
        const{name,value}=e.target
        setusers((prev)=>({...prev,[name]:value}))
    }

    const handleClick=async(e)=>{
        e.preventDefault()

        try{
            await axios.post('http://localhost:3000/users',users)
            console.log('Sending user:', users);
            setusers({name:'',email:''})
        }catch(err){
            console.log(err)
        }
    }
  return (
    <>
    <form onSubmit={handleClick}>
        <input type="text" name='name' value={users.name} onChange={handleChange} />
        <input type="email" name='email' value={users.email} onChange={handleChange} />
        <button type='submit'>Submit</button>
    </form>
    </>
  )
}
