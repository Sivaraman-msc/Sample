import React, { useState } from 'react'

export default function Login() {
    const[email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const[message,setMessage]=useState('')

    const signin=()=>{
        if(email=='sivaraman.bca.st@gmail.com' && password=='Acknowledge_me@1'){
            setMessage("Loading.....")
            setTimeout(()=>{
                setMessage("Sucessfully login")
            },3000)
        }else{
            setMessage('Loading....')
            setTimeout(() => {
                setMessage("Invalid")
            }, 3000);
        }
    }

  return (
    <div>
        <h1>Login</h1>
        <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} /><br />
        <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} /><br />
        <button onClick={signin}>Signin</button>
        {message && <p>{message}</p>}
    </div>
  )
}
