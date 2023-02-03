import React from 'react'

const BoxDisplay = (props) => {
    const { boxes } = props
    return (
        <div className='boxArray'>
            {
                boxes.map((box, index) => (
                    <div key={index} style={{ background: `${box.color}`, height: `${box.height}px`, width: `${box.width}px` }}>
                    </div>
                ))
            }
        </div>
    )
}

export default BoxDisplay