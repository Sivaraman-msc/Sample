import React, { useCallback, useEffect, useState } from 'react'

export default function UseCallBack() {
    const [count,setCount]=useState(0)

    const handleClick=()=>{
        setCount(count+1)
    }

   /* useEffect(()=>{
        console.log(`Count : ${count}`)
    },[count])*/

    const clicked=useCallback(()=>{
        console.log('Clicked')
    },[])
  return (
    <div>
        <button onClick={handleClick}>Count</button>
        <Child onClick={clicked} />
    </div>
  )
}
const Child = React.memo(({ onClick }) => {
    console.log('Child rendered');
    return <button onClick={onClick}>Click Me</button>;
  });

