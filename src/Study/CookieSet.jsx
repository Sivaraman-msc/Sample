import React, { useState } from 'react'
import cookie from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function CookieSet() {
    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        password: '',
        profile: null
    })
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    const navigate=useNavigate()
    const{setSubmittedUser}=useAuth()

    const handleChange = (e) => {
        const { name, value, files } = e.target
        if (name === 'profile') {
            setFormdata((prev) => ({ ...prev, profile: files[0] }))
        } else {
            setFormdata((prev) => ({ ...prev, [name]: value }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = {
                name:formdata.name,
                email:formdata.email,
                password:formdata.password,
                profile:formdata.profile?URL.createObjectURL(formdata.profile):null
            }
            cookie.set('user',JSON.stringify(data),{expires:30})
            console.log('Data : ',data)
            setSubmittedUser(data)
            setError(false)
            setMessage('Success')
            navigate('/dashboard')
        } catch (err) {
            console.log("Error POST users", err)
            setError(true)
            setMessage('Something went wrong')
        }
    }
    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} value={formdata.name} name='name' placeholder='Name' />
                <input type='email' onChange={handleChange} value={formdata.email} name='email' placeholder='Email id' />
                <input type='password' onChange={handleChange} value={formdata.password} name='password' placeholder='Password' />
                <input type='file' onChange={handleChange} name='profile'/>
                <button type='submit'>Submit</button>
                <Link to='/'>Already have an account ? Signin</Link>
                {message && <p>{message}</p>}
            </form>
        </div>
    )
}
