import React from 'react';
import '../style/Highlights.css'
import Card from './card';

const Highlights = () => {
    return (
        <div className='highContainer'>
            <div className='firstContainer'>
                <p className='section'>This weeks specials!</p>
                <button
                    className='sectionBtn'
                    type='button'
                 >Online Menu</button>
            </div>
            <div className='secondContainer'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default Highlights;