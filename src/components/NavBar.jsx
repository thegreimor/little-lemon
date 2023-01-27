import React from 'react';
import {Link} from 'react-router-dom'
import '../style/NavBar.css'

const NavBar = () => {
    return (
        <nav className='navBar'>
            <ul className='navMenu'>
                <Link className='liMenu' to="/">Home</Link>
                <li className='liMenu' >About</li>
                <li className='liMenu' >Menu</li>
                <li className='liMenu' >Reservation</li>
                <li className='liMenu' >Order Online</li>
                <li className='liMenu' >Login</li>
            </ul>
        </nav>
    );
};

export default NavBar;