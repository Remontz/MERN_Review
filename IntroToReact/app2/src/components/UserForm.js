import React, { useState } from 'react'
import UserDisplay from './UserDisplay'

const UserForm = (props) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const createUser = (e) => {
        e.preventDefault()
        const newUser = { username, email, password }
        console.log("Welcome", newUser)
        setUsername("")
        setEmail("")
        setPassword("")
    }
    return (
        <div>
            <form action="" onSubmit={createUser}>
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type='submit' />
            </form>
            <h2>Current User Information</h2>
            <UserDisplay username={username} email={email} />
        </div>
    )
}

export default UserForm