import React from 'react';
import {Link} from 'react-router-dom'
import '../style/Hero.css'

const Hero = () => {
    return (
        <div className='containerHero'>
            <img 
                className='heroImg' 
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="restImg" 
            />
            <h1 className='textTitle'>Little Lemon</h1>
            <h2 className='textSubtitle'>Chicago</h2>
            <p className='textArticle'>
                We are a family owned Mediterranean restaurant, focused on tradicional recipes served with a modern twist
            </p>
            <Link
                className='bookingBtn'
                type='button'
                to="/booking/:bookId/new"
            >
                Reserve a Table
            </Link>
        </div>
    );
};

export default Hero;