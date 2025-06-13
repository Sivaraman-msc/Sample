import { useEffect, useState } from "react";

function Batch(){
    const [count,setcount]=useState(0)

    const Increment=()=>{
       /* setcount(count+1)
        setcount(count+1)*/
        setcount(prevCount=>prevCount+1)
        setcount(prevCount=>prevCount+1)
    }

    useEffect(()=>{
        console.log(count)
    },[count])

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={Increment}>Click</button>
        </div>
    )
}

export default Batch;