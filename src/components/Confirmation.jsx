import React from 'react';
import '../style/Confirmation.css'


const Confirmation = ({book}) => {

    const { date, guests, id, occasion, time } = book
   

    return (
        <div className='formContainer'>
           <h1>Reservation confirmation</h1>
            <p className='title'>Reservation date: <span>{date}</span></p>
            <p className='title'>Reservation time: <span>{time}</span></p>
            <p className='title'>Number of people: <span>{guests}</span></p>
            <p className='title'>Occasion: <span>{occasion}</span></p>
        </div>
    );
};

export default Confirmation;