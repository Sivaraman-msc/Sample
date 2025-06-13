import React, { useState } from 'react'

const message=React.memo(({name})=>{
  console.log('React memo')
  return <h2>Hello {name}</h2>
})

export default function ReactMemo() {
  const [count,setCount]=useState(0)

  increment=()=>{
    setCount(count+1)
  }
  return (
    <>
    <message name='Sivaraman' />
    <h2>{count}</h2>
    <button onClick={increment}>Click</button>
    </>
  )
}
