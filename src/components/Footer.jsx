import React from 'react';
import footerLogo from '../img/footerLogo.png'
import '../style/Footer.css'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <img className='logoImg' src={footerLogo} alt="" />
            <div className='listContainer'>
                <p className='titlleList'>Doormat Navigation</p>
                <ul className='ulNav'>
                    <li className='liFooterNav' ><a href=""></a>Home</li>
                    <li className='liFooterNav' ><a href=""></a>About</li>
                    <li className='liFooterNav' ><a href=""></a>Menu</li>
                    <li className='liFooterNav' ><a href=""></a>Reservation</li>
                    <li className='liFooterNav' ><a href=""></a>Order Online</li>
                    <li className='liFooterNav' ><a href=""></a>Login</li>
                </ul>
            </div>
            <div className='listContainer'>
                <p className='titlleList'>Contact</p>
                <ul className='ulNav'>
                    <li className='liFooterNav' >Adress</li>
                    <li className='liFooterNav' >Phone number</li>
                    <li className='liFooterNav' >Email</li>
                </ul>
            </div>
            <div className='listContainer'>
                <p className='titlleList'>Social Media Links</p>
                <ul className='ulNav'>
                <li className='liFooterNav' >Adress</li>
                <li className='liFooterNav' >Phone number</li>
                <li className='liFooterNav' >Email</li>
            </ul>
            </div>
        </div>
    );
};

export default Footer;