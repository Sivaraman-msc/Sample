import React, { useEffect, useState } from 'react'

export default function useFetch(url) {

    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(null)
    const [err,setErr]=useState(null)

    useEffect(()=>{
        if(!url)
            setLoading(true)
        setErr(null)

        fetch(url)
        .then(res=>{if(!res.ok) throw new Error ('Network response is not okay'); return res.json()})
            .then(json=>setData(json))
        .catch(err=>setErr(err))
        .finally(()=>setLoading(false))
    },[url])
  return (
    {data,loading,err}
  )
}
//check useComponent.jsx
