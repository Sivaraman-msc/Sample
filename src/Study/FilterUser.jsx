import React, { useEffect, useState } from 'react'
import { useAuth } from './AuthContext'

export default function FilterUser() {
  const [selectedEmail, setSelectedEmail] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])
  const { submittedUser } = useAuth()

  useEffect(() => {
    if (submittedUser) {
      setFilteredUsers([{ ...submittedUser, id: 0 }])
    }
  }, [submittedUser])

  return (
    <form>
      <section>
        <select
          value={selectedEmail}
          onChange={(e) => setSelectedEmail(e.target.value)}
        >
          <option value="">Select Email</option>
          {filteredUsers.map((user) => (
            <option key={user.id} value={user.email}>
              {user.email}
            </option>
          ))}
        </select>
      </section>
    </form>
  )
}
