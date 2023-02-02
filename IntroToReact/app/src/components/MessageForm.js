import React, { useState } from 'react'

const MessageForm = (props) => {
    const { firstName } = props
    const [msg, setMsg] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onNewMessage(msg)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h5>Set {firstName}'s Message</h5>
            <textarea
                rows='4'
                cols='50'
                placeholder={`Enter ${firstName}'s message here`}
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
            >
            </textarea>
            <input type='submit' value='Send Message' />
        </form>
    )
}

export default MessageForm