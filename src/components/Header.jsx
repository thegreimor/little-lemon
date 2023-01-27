import React from 'react';
import NavBar from './NavBar'
import '../style/Header.css'
import navLogo from '../img/navLogo.png'

const Header = () => {
    return (
        <div className='headerContainer'>
            <div className='containerImg'>
                <img className='navBarLogo'  src={navLogo} alt="navigation logo" />
            </div>
            <NavBar />
        </div>
    );
};

export default Header;