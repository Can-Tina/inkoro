import { React } from 'react';import '../styles/header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h1 className='header-item title'>Inkoro</h1>
            <p className='header-item'>Saved</p>
            <p className='header-item'>Explore</p>
        </div>
    )
}

export default Header