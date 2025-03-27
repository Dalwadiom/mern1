import React, { useState } from 'react'
import { postUser } from '../api'

function AddUser() {
    const [formData, setFormData] = useState({username : "", email : "", password : ""})
    function handleChange(e){
        setFormData(preval => ({...preval, [e.target.name] : e.target.value}))
    }

   async function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
        await postUser(formData)
    }
  return (
    <div>
      <h1> Add User </h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' name="username" value={formData.username} onChange={handleChange}/>
        <input type="email" placeholder='Email' name="email" value={formData.email} onChange={handleChange}/>
        <input type="password" placeholder='Password' name="password" value={formData.password} onChange={handleChange}/>
                <button type='submit'>Submit</button>
      </form>
    </div>

  )
}

export default AddUser
