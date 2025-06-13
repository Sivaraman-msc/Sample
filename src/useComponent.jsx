import React from 'react'
import useFetch from './fetch'

export default function useComponent() {

    const {data,err,loading}=useFetch('https://jsonplaceholder.typicode.com/posts')

    if(loading) return <p>Loading....</p>
    if(err) return <p>Something went wrong</p>
  return (
   <ul>
     {data.map(post=>(<li key={post.id}>{post.name}</li>))}
   </ul>
  )
}
