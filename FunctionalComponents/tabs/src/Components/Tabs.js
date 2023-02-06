import React, { useState } from 'react'
import TabsDisplay from './TabsDisplay'

const Tabs = (props) => {
    const { arrayLength } = props
    const blankArray = new Array(arrayLength).fill(null)
    for (let i = 0; i < arrayLength; i++) {
        blankArray[i] = { label: ('Tab ' + (i + 1)), content: ('Tab ' + (i + 1) + ' content is showing here.') }
    }

    const [tabsArray, setTabsArray] = useState(blankArray)
    const [i, setI] = useState(0)
    const [currentContent, setCurrentContent] = useState()
    console.log(tabsArray[i])
    const tabClicked = (index) => {
        setI(index)
        setCurrentContent(tabsArray[i].content)
    }


    return (
        <div className='tabs-box'>
            {
                <ul>
                    <li>
                        {tabsArray.map((tab, index) => (
                            <button onClick={() => tabClicked(index)}>{tab.label}</button>
                        ))}
                    </li>
                </ul>

            }
            <p>
                <TabsDisplay currentTab={currentContent} />
            </p>
        </div>
    )

}

export default Tabs