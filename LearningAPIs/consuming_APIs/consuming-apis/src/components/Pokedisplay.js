import React, { useState } from 'react'

const Pokedisplay = () => {
    const [currentName, setCurrentName] = useState('')
    const [display, setDisplay] = useState('')

    const changePokemon = (currentName) => {
        setDisplay(currentName)
    }
    return (
        <div>
            {/* Form that accepts pkemon name on submit performs fetch*/}
            <form onSubmit={changePokemon({ currentName })}>
                <input type='text' onChange={(e) => setCurrentName(e.target.value)} value={currentName} />
                <button type='submit'>Search Pokemon</button>
            </form>
            <div>
                {display}
            </div>
        </div>
    )
}


export default Pokedisplay