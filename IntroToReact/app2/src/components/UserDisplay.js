import React from 'react'

const UserDisplay = (props) => {
    const { username, email } = props

    return (
        <div>
            <h1>Current User Information</h1>
            <p> {username}</p>
            <p> {email}</p>
        </div>
    )
}

export default UserDisplay