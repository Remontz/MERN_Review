import React, { useState } from 'react'

const Tabs = (props) => {
    const { arrayLength } = props
    const blankArray = new Array(arrayLength).fill(null)
    for (let i = 0; i < arrayLength; i++) {
        blankArray[i] = { label: ('Tab ' + (i + 1)), content: ('Tab ' + (i + 1) + ' content is showing here.') }
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
    const handleMouseOver = (e) => {
        setMousedOver(true)
    }
    const handleMouseLeave = (e) => {
        setMousedOver(false)
    }


    return (
        <div className='tabs-box'>
            {<div className='tabs-btns'>
                {tabsArray.map((tab, index) => (
                    <button
                        id={mousedOver ? 'dark-btn' : 'btn'}
                        //To fix maybe add button-id as an attribute to the object.
                        onClick={() => tabClicked(index)}
                        onMouseOver={(e) => handleMouseOver(e)}
                        onMouseLeave={(e) => handleMouseLeave(e)}
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