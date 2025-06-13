import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ReadUpdateDelete() {

    const[users,setusers]=useState([])

    const fetchUsers=async()=>{
       const res= await axios.get('http://localhost:3000/users')
       setusers(res.data)
    }
    useEffect(()=>{
        fetchUsers()
    },[])

    const deleteuser=async(id)=>{
        await axios.delete(`http://localhost:3000/users/${id}`)
        fetchUsers()
    }
    const updateuser=async(user)=>{
        const name=prompt('Name : ',user.name)
        const email=prompt('Email :',user.email)
        if(name && email){
            await axios.put(`http://localhost:3000/users/${user._id}`,{name,email})
            fetchUsers()
        }
    }
  return (
    <>
    {users.map(user=>(
        <div key={user._id}> 
        {user.name}
        {user.email}
        <button onClick={()=>updateuser(user)}>Update</button>
        <button onClick={()=>deleteuser(user._id)}>Delete</button>
        </div>
    ))}
    </>
  )
}
