import React from 'react'
import { UseAuth2 } from './useAuth'
import { useSelector } from 'react-redux'

export default function Home() {
  const { user } = UseAuth2()
  const storedUser = useSelector(state => state.auth?.user)

  if (!user) return <p>Loading user...</p>

  return (
    <div>
      <h1>Hello {user.name}</h1>
      <h2>Redux User Data</h2>
      {storedUser ? (
        <ul>
          <li>{storedUser._id}</li>
          <li>{storedUser.name}</li>
          <li>{storedUser.email}</li>
          <li>{storedUser.age}</li>
          <li>{storedUser.password}</li>
          <li>{storedUser.role}</li>
        </ul>
      ) : (
        <p>No user data in Redux.</p>
      )}
    </div>
  )
}
