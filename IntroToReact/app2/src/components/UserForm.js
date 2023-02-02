import React, { useState } from 'react'
import UserDisplay from './UserDisplay'

const UserForm = (props) => {
    const [username, setUsername] = useState("")
    const [clearedName, setClearedName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)

    const createUser = (e) => {
        e.preventDefault()
        const newUser = { username, email, password }
        console.log("Welcome", newUser)
        setClearedName(username)
        setUsername("")
        setEmail("")
        setPassword("")

        setIsSubmitted(true)
    }

    const welcomeMsg = (isSubmitted) ? `Thanks ${clearedName}!` : `Welcome to User Registration`
    return (
        <div>
            <h3>{welcomeMsg}</h3>
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
                {((username !== '') && (email !== '') && (password !== '')) ? <input type='submit' /> : <input type='submit' disabled />}

            </form>
            <h2>Current User Information</h2>
            <UserDisplay username={username} email={email} />
        </div>
    )
}

export default UserForm