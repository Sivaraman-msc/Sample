import React from 'react'
import UseAuthTask from './AuthProvider'

export default function HomeTask() {
    const { submitteduser } = UseAuthTask()

    if (!submitteduser) {
        return <p>Loading user data...</p>
    }

    return (
        <>
            {submitteduser.image && (
                <img src={submitteduser.image} alt='myImg' />
            )}
            <p>Welcome {submitteduser.name}</p>
            <p>And your email: {submitteduser.email}</p>
        </>
    )
}
