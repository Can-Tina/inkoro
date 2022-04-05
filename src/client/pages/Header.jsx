import { React } from 'react';
import '../styles/header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header-container'>
            <h1 className='header-item title'>Inkoro</h1>
            <p className='header-item'><Link to='/saved' className='link'>Saved</Link></p>
            <p className='header-item'><Link to='/' className='link'>Explore</Link></p>
        </div>
    )
}

export default Header