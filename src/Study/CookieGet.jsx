import React from 'react'
import cookie from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'

export default function CookieGet() {
    const navigate=useNavigate()

    const data=JSON.parse(cookie.get('user'))

    const logout=()=>{
        cookie.remove('user')
        navigate('/signup')
    }
  return (
    <>
    <div>Name: {data?.name}</div>
    {data?.profile && (
        <img src={data.profile} alt='user pfp' className='rounded-lg' />
    )}
    <Link to='/'>Back</Link>
    <button onClick={logout}>Logout</button> <br />
    <Link to='/userData'>UserDetails</Link> <br />
    <Link to='/email'>Email</Link> <br />
    <Link to='/updateprofile'>Update profile</Link> <button>
      <Link to='/condition'>Condition</Link>
    </button>
    </>
  )
}
