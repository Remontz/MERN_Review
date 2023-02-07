import React, { useState } from 'react'

const Tabs = (props) => {
    const { arrayLength } = props
    const blankArray = new Array(arrayLength).fill(null)
    for (let i = 0; i < arrayLength; i++) {
        blankArray[i] = { label: ('Tab ' + (i + 1)), content: ('Tab ' + (i + 1) + ' content is showing here.'), btnId: '' }
    }

    const [tabsArray, setTabsArray] = useState(blankArray)

    const contentArray = tabsArray.map(tab => tab.content)

    const [i, setI] = useState(0)
    const [isClicked, setIsClicked] = useState(false)

    const tabClicked = (index) => {
        setI(index)
        setIsClicked(!isClicked)
    }

    const [mousedOver, setMousedOver] = useState(false)
    const handleMouseOver = (e, index) => {
        setMousedOver(true)
        const newArray = tabsArray.filter((tab, i) => (
            (i === index ? tab.btnId = 'dark-btn' : tab.btnId = 'btn')
        ))
        setTabsArray(newArray)
    }
    const handleMouseLeave = (e, index) => {
        setMousedOver(false)
        const newArray = tabsArray.filter((tab, i) => (
            (i === index ? tab.btnId = 'btn' : tab.btnId = 'btn')
        ))
        setTabsArray(newArray)
    }




    return (
        <div className='tabs-box'>
            {<div className='tabs-btns'>
                {tabsArray.map((tab, index) => (
                    <button
                        id={tab.btnId}
                        //To fix maybe add button-id as an attribute to the object.
                        onClick={() => tabClicked(index)}
                        onMouseOver={(e) => handleMouseOver(e, index)}
                        onMouseLeave={(e) => handleMouseLeave(e, index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            }
            <p>
                {isClicked ? contentArray[i] : contentArray[i]}
            </p>
        </div>
    )

}

export default Tabs