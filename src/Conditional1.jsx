import React from 'react'
import Conditional2 from './Conditional2'

export default function Conditional1() {

    const carInfo={
       /* name:"Ferrari",
        price:20000000*/
    }
  return (
    <div>Conditional1
        {carInfo.name !== undefined && carInfo.price !== undefined ? <Conditional2 carInfo={carInfo} /> :null }
        
    </div>
  )
}
