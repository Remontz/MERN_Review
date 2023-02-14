import React, { useState } from 'react'


const List = () => {
    const [list, setList] = useState([])
    const [currentItem, setCurrentItem] = useState({ content: '', isComplete: false })

    const addItem = (e) => {
        e.preventDefault()
        console.log(currentItem)
        const newItem = currentItem
        setList([...list, newItem])
        setCurrentItem({ content: '', isComplete: false })
    }

    const handleOnChange = (index) => {
        const newList = list.map((item, i) => (
            i === index ? item = { content: item.content, isComplete: !item.isComplete } : item = { content: item.content, isComplete: item.isComplete }
        ))
        console.log(newList)
        setList(newList)
    }

    return (
        <div>
            <form onSubmit={addItem}>
                <input
                    type='text'
                    onChange={(e) => setCurrentItem({ content: e.target.value, isComplete: false })}
                    value={currentItem.content}
                />
                <button type='submit' >Add a new Item</button>
            </form>

            {<ul>
                {list.map((item, index) => (
                    <li style={{ display: 'flex', flexDirection: 'row', gap: '10px' }} key={index}>
                        {item.isComplete ? (<p style={{ textDecoration: 'line-through' }}>{item.content}</p>) : (<p>{item.content}</p>)}
                        <input type='checkbox' name='isComplete' id='isComplete' onChange={(e) => handleOnChange(index)} />
                    </li>
                ))}
            </ul>}
        </div>
    )
}

export default List