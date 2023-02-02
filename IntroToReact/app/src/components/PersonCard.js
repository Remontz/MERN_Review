import React, { useState } from 'react'

const PersonCard = (props) => {
    const { firstName, lastName, hairColor } = props
    const [currentAge, setCurrentAge] = useState(props.age)

    const fullName = props.firstName + ' ' + props.lastName
    const isBlack = (hairColor === 'Black') ? 'white' : 'black'

    const handleBDay = () => setCurrentAge(currentAge + 1)

    return (
        <div>
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {currentAge}</p>
            <p>Hair Color: <span style={{ background: `${hairColor}`, color: `${isBlack}` }} >{hairColor}</span></p>
            <button onClick={handleBDay}> Happy Birthday {fullName} </button>
        </div>
    )
}

export default PersonCard