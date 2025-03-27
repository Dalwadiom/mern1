import React, { useEffect, useState } from 'react'
import { getUser } from '../api'

function UserList() {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData(){
            const response = await getUser()
            setData(response.users)
        }
        fetchData()
    }, [])
  return (
    <div>
        <table border={1}>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 && data.map((user) => (
                    <tr key={user._id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
       </table>
    </div>
  )
}

export default UserList
