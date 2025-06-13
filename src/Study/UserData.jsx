import React, { useEffect, useState } from 'react'
import { useAuth } from './AuthContext'

export default function UserData() {
  const [data, setData] = useState([]) 
  const { submittedUser } = useAuth()

  useEffect(() => {
    const sampledata = [
      {
        id: 1,
        name: 'Jennifer',
        email: 'Jeni@gmail.com',
        password: 'Acknowledge_me@1'
      },
      {
        id: 2,
        name: 'Angelina',
        email: 'Angelina@gmail.com',
        password: 'Acknowledge_me@1'
      }
    ]

    const updatedusers = submittedUser
      ? [{ ...submittedUser, id: 0 }, ...sampledata]
      : sampledata

    setData(updatedusers)
  }, [submittedUser])

  return (
    <>
      {data.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
          {user.profile &&(
            <img src={user.profile} alt='img' />
          )}
        </div>
      ))}
    </>
  )
}
