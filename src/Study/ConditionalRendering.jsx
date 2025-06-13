import React from 'react'
import { useAuth } from './AuthContext'
import { Link } from 'react-router-dom'

export default function ConditionalRendering() {
    const {submittedUser}=useAuth()
  return (
    <nav>
        <Link to='/'>Home</Link>
        {submittedUser ?(
            <>
            <h2>Hello {submittedUser.name}</h2>
            {submittedUser.email==='Sivaraman.bca.st@gmail.com' && <p>This is secret</p>}
            </>
    ):(
        <Link to='/signup'>Signup</Link>
    )}
    </nav>
  )
}
