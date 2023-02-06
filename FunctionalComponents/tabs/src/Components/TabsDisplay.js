import React from 'react'

const TabsDisplay = (props) => {
    const { currentTab } = props
    return (
        <div className='tab-content'>
            <p>{currentTab}</p>
        </div>
    )
}

export default TabsDisplay