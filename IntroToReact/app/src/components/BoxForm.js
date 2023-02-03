import React, { useState } from 'react'

const BoxForm = (props) => {
    const { boxes, setBoxes } = props
    const [box, setBox] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        setBoxes([...boxes, box])
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Color: </label>
                <input type="text" value={box.color} onChange={(e) => setBox({ ...box, color: e.target.value })} />
            </div>
            <div>
                <label>Height: </label>
                <input type="number" value={box.height} onChange={(e) => setBox({ ...box, height: e.target.value })} />
            </div>
            <div>
                <label>Width: </label>
                <input type="number" value={box.width} onChange={(e) => setBox({ ...box, width: e.target.value })} />
            </div>
            <input type='submit' value='Send Box' />
        </form>
    )
}

export default BoxForm