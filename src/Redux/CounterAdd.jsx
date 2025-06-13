import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement, reset } from './slices/CounterSlice'

export default function CounterAdd() {
    const count=useSelector(state=>state.counter.value)
    const dispatch=useDispatch()

    const handleincrement=()=>{
        dispatch(increment())
    }
    const handledecrement=()=>{
        dispatch(decrement())
    }
    const handleReset=()=>{
        dispatch(reset())
    }

  return (
    <div>
        <p>{count}</p>
        <button onClick={handleincrement}>Increment</button>
        <button onClick={handledecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}
