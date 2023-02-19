import React from 'react'

const Header = (props) => {
  return (
    <div>
        {
            // Nav Links
            // Logo
            // Contact Links
            // Dark Mode & Writing Mode activators
        }
        <div className='nav'>
            <img href='' alt='KG-logo' />
            <ul id='nav-links'>
                <li>About Me</li>
                <li>Projects</li>
                <li>Creative Writing</li>
            </ul>
        </div>
        <div className='sub-nav'>
            {props.children}
        </div>
    </div>
  )
}

export default Header