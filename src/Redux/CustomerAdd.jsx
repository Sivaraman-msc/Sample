import React, { useState } from 'react'
import CustomerView from './CustomerView'
import { addCustomer as addCustomerAction } from './slices/CustomerSlice'
import { useDispatch } from 'react-redux'

export default function CustomerAdd() {
    const [input, setInput] = useState('')
    const dispatch=useDispatch()

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const addCustomer = () => {
        if (input) {
           dispatch(addCustomerAction(input))
            setInput('')
        }
    }

    return (
        <>
        <div>
            <input type='text' value={input} onChange={handleChange} />
            <button onClick={addCustomer}>Add</button>
        </div>
        </>
    )
}
