import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import Confirmation from '../components/Confirmation';
import {useLoaderData} from 'react-router-dom';
import { callBooking } from '../data/book';

export function loader() {
    const booking = callBooking()

    return booking;
    
}

const BookingConfirm = () => {
    const booking = useLoaderData();
    

    return (
        <div>
           <Header />
           {booking.map(book => (
                        <Confirmation
                            book={book}
                            key={book.id}
                        />

                        ))}
           
           <Footer />
        </div>
    );
};

export default BookingConfirm;