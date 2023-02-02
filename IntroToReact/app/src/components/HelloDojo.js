import React from 'react'

const HelloDojo = ({ value }) => {

    return (
        <div>
            <h1>Hello {value}, Welcome to the Dojo!</h1>
            <h4>Things I need to do:</h4>
            <ul>
                <li>Learn React</li>
                <li>Climb Mt. Everest</li>
                <li>Run a marathon</li>
                <li>Feed the dogs</li>
            </ul>
        </div>
    )
}

export default HelloDojo