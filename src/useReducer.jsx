import React, { useReducer } from 'react';
import Reducer from './Reducer'

export default function UseReducer() {
    const initialState={count:0}

    const [state,dispatch]=useReducer(Reducer,initialState)
  return (
    <>
    <h2>Count : {state.count}</h2>
    <button onClick={()=>dispatch({type:'increment'})}>Increment</button><br />
    <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button><br />
    <button onClick={()=>{dispatch({type:'reset'})}}>Reset</button>
    </>
  )
}
