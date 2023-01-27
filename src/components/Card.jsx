import React from 'react';
import '../style/Card.css'
import foodImg from '../img/greek salad.jpg'

const Card = () => {
    return (
        <div className='cardContainer'>
            <div className='imgContainer'>
                <img className='imgCard' src={foodImg} alt="food" />
            </div>
            <div className='name-price'>
                <p className='name'>Greek Salad</p>
                <p className='price'>$12.99</p>
            </div>
            <div className='detailsContainer'>
                <p className='detail'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since .
                </p>
                <p className='deliveryText'>Order a delivery</p>
            </div>
        </div>
    );
};

export default Card;