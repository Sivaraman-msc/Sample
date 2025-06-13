import React from 'react'

export default function FetchLocal() {

    const data=[
        {
            Name:"Siva",
            Age:22,
            Email:"Siva@gmail.com",
            password:'Acknowledge_me@1'
        },{
            Name:"Angelina",
            Age:22,
            Email:"Angelina@gmail.com",
            password:'Acknowledge_me@1'
        }
    ]
  return (
    <div>
        {data.map((users,index)=>(
            <div key={index}>
            <p>Name : {users.Name}</p>
            <p>Age : {users.Age}</p>
            <p>Email : {users.Email}</p>
            <p>Password : {users.password}</p>
            </div>
    ))}
    </div>
  )
}
