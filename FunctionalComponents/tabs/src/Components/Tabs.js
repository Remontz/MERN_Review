import React, { useState } from 'react'

const Tabs = (props) => {
    const { arrayLength } = props
    const blankArray = new Array(arrayLength).fill(null)
    for (let i = 0; i < arrayLength; i++) {
        blankArray[i] = { label: ('Tab ' + (i + 1)), content: ('Tab ' + (i + 1) + ' content is showing here.') }
    }

    const [tabsArray, setTabsArray] = useState(blankArray)
    const [currentTabContent, setCurrentTabContent] = useState(tabsArray[0].content)

    const handleShow = (index) => {
        // setI(index)
        console.log(tabsArray[index].content)
    }

    return (
        <div className='tabs-box'>
            Tabs
            <ul className='tab-btns'>
                {tabsArray.map((tab, index) => (
                    <li>
                        <button onClick={handleShow(index)}>{tab.label}</button>
                    </li>
                ))}
            </ul>
            <div className='tab-content'>
                {/* {tabsArray.content} */}
            </div>

        </div>
    )

}

export default Tabs