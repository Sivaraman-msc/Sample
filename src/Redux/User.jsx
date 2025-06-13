import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser } from './slices/UserSlice'

export default function User() {

    const[input,setInput]=useState({
        name:'',
        email:'',
        password:''
    })
    const dispatch=useDispatch()
    const data=useSelector(state=>state.user)

    const handleChange=(e)=>{
        const{name,value}=e.target
        setInput((prev)=>({...prev,[name]:value}))
    }
    const handleClick=(e)=>{
        e.preventDefault()
        if(input.name && input.email && input.password){
            dispatch(addUser(input))
            setInput({ name: '', email: '', password: '' });
        }
    }
    const handleDelete=(index)=>{
        dispatch(deleteUser(index))
    }
  return (
    <div>
        <form onClick={handleClick} >
            <input type="text" value={input.name} name='name' onChange={handleChange} />
        <input type="email" value={input.email} name='email' onChange={handleChange}  />
        <input type="password" value={input.password} name='password' onChange={handleChange} />
        <button type='submit'>Submit</button>
        </form>

        <ul>
            {data.map((user,index)=>(<div key={index}>
                <li>{user.name}</li>
                <li>{user.email}</li>
                <li>{user.password}</li>
                <button onClick={()=>handleDelete(index)}>Delete</button>
            </div>))}
        </ul>
    </div>
  )
}
