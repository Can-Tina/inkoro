import { React } from 'react';
import '../styles/landing.css'
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className='landing-container'>
            <h1>Welcome to Inkoro</h1>
            <h2>Your hub for ink-spiration</h2>
            <p className='landing-start'><Link to='/explore' className='link'>Click <span className='here'>here</span> to start your journey</Link></p>
        </div>
    )
}

export default Landing