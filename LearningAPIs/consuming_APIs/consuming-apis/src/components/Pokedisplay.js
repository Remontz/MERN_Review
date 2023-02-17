import React, { useEffect, useState } from 'react'

const Pokedisplay = () => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => {
                return response.json()
            })
            .then(response => {
                setPokemon(response.results)
                console.log(response.results)
            })
            .catch((err) => { console.log(err) })
    }, [])

    return (
        <div>
            <ul>
                {pokemon.map((poke, index) => {
                    return (<li>{poke.name}</li>)
                })}
            </ul>
        </div>
    )
}


export default Pokedisplay