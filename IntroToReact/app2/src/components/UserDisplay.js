import React from 'react'

const UserDisplay = (props) => {
    const { username, email } = props

    return (
        <div>
            <p> {username}</p>
            <p> {email}</p>
        </div>
    )
}

export default UserDisplay