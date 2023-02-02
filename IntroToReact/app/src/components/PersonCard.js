import React, { useState } from 'react'
import MessageForm from './MessageForm'
import MessageDisplay from './MessageDisplay'

const PersonCard = (props) => {
    const { firstName, lastName, hairColor } = props
    const [currentAge, setCurrentAge] = useState(props.age)
    const [currentMsg, setCurrentMsg] = useState('There are no messages')
    const handleNewMsg = (newMessage) => {
        setCurrentMsg(newMessage)
    }

    const fullName = props.firstName + ' ' + props.lastName
    const isBlack = (hairColor === 'Black') ? 'white' : 'black'

    const handleBDay = () => setCurrentAge(currentAge + 1)

    return (
        <div className='personCard'>
            <div className='person-info'>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {currentAge}</p>
                <p>Hair Color: <span style={{ background: `${hairColor}`, color: `${isBlack}` }} >{hairColor}</span></p>
                <button onClick={handleBDay}> Happy Birthday {fullName} </button>
            </div>
            <div className='messages'>
                <MessageForm onNewMessage={handleNewMsg} firstName={firstName} />
                <MessageDisplay message={currentMsg} firstName={firstName} />
            </div>
        </div>
    )
}

export default PersonCard