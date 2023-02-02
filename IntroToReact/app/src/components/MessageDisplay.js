import React from 'react'

const MessageDisplay = (props) => {
    const { firstName } = props
    return (
        <p>
            <h5> {firstName}'s Current Message </h5>
            <span>{props.message}</span>
        </p>
    )
}

export default MessageDisplay