import axios from 'axios'
import cookie from 'js-cookie'
import React, { useEffect, useState } from 'react'

export default function RUD() {
    const[data,setData]=useState([])

    const fetchUSer=async()=>{
        const res=await axios.get('http://localhost:3000/Crud')
        setData(res.data.user)
        console.log(res.data)
    }
    useEffect(()=>{
        fetchUSer()
    },[])

    const deleteData=async(id)=>{
        await axios.delete(`http://localhost:3000/Crud/${id}`)
        fetchUSer()
    }
    const updateData=async(user)=>{
        const name=prompt('Name ',user.name)
        const email=prompt('Email ',user.email)
        const password=prompt('Password ',user.password)
        if(name && email && password){
            await axios.put(`http://localhost:3000/Crud/${user._id}`,{name,email})
            fetchUSer()
        }
    }
    const getData=JSON.parse(cookie.get('user'))
  return (
        <>
        {data.map(users=>(
            <div key={users._id}>
                <p>{users.name}</p>
                <p>{users.email}</p>
                <button onClick={()=>deleteData(users._id)}>Delete</button>
                <button onClick={()=>updateData(users)}>Update</button>
            </div>
        ))}
        <h2>Cookie</h2>
        <h2>Name : {getData.name}</h2>
        <h2>Email : {getData.email}</h2>
        </>
  )
}
