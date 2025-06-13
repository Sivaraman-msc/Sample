import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCustomer } from './slices/CustomerSlice'

export default function CustomerView() {
  const customers =  useSelector((state)=>state.customers)
  const dispatch=useDispatch()

  const handleClick=(index)=>{
    dispatch(deleteCustomer(index))
  }
    return (
        <div>
             <ul style={{listStyle:'none'}}>
                {
                    customers.map((customer,index) => (<li key={index}>{customer}<button className='border border-2' onClick={()=>handleClick(index)}>Delete</button></li>))
                }
            </ul>
        </div>
    )
}
