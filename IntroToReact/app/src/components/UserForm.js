import React, { useState } from 'react'
import UserDisplay from './UserDisplay'

const UserForm = (props) => {
    const [username, setUsername] = useState("")
    const [clearedName, setClearedName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isMatch, setIsMatch] = useState(false)


    const createUser = (e) => {
        e.preventDefault()
        const newUser = { username, email, password }
        console.log("Welcome", newUser)
        setClearedName(username)
        setUsername("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")

        setIsSubmitted(true)
        setIsMatch(false)
    }

    const welcomeMsg = (isSubmitted) ? `Thanks ${clearedName}!` : `Welcome to User Registration`

    const validateMatch = (e) => {
        setIsMatch(false)
        setConfirmPassword(e.target.value)
        e.target.value === password ? setIsMatch(true) : setIsMatch(false)
    }
    return (
        <div>
            <h3>{welcomeMsg}</h3>
            <form action="" onSubmit={createUser}>
                <div>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    {(username.length > 0) ? ((username.length <= 2) ? <p id='formErrorMsg'>User Name must be at least 2 characters.</p> : <p id='formValidMsg'>Valid Username entered</p>) : (<br />)}
                </div>
                {/* || (!email.includes('@')) */}
                <div>
                    <label>Email Address: </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {(email.length > 0) ? (((email.length <= 5) || (!email.includes('@'))) ? <p id='formErrorMsg'>Email must be at least 5 characters and include an valid '@email' modifier.</p> : <p id='formValidMsg'>Valid email entered</p>) : (<br />)}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {(password.length > 0) ? ((password.length <= 8) ? <p id='formErrorMsg'>Password must be at least 8 characters.</p> : <p id='formValidMsg'>Valid password entered</p>) : null}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={(e) => validateMatch(e)} />
                    {(confirmPassword.length > 0) ? ((isMatch) ? null : <p id='formErrorMsg'>Passwords must Match</p>) : <br />}
                </div>
                {((username !== '') && (email !== '') && (password !== '') && (isMatch)) ? <input type='submit' /> : <input type='submit' disabled />}

            </form>
            <h2>Current User Information</h2>
            <UserDisplay username={username} email={email} />
        </div>
    )
}

export default UserForm