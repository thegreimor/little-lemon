import React from 'react';
import '../style/Form.css'

const UserForm = ({book}) => {
    return (
        <>
        <label htmlFor="res-date">Choose date</label>
          <input 
            type="date" 
            id="res-date" 
            name='date'
            defaultValue={book?.date}
          />
          <label htmlFor="res-time">Choose time</label>
          <select 
            id="res-time "
            name='time'
            defaultValue={book?.time}
          >
            <option>-- Select --</option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input 
            type="number" 
            placeholder={1} 
            name="guests"
            min={1} 
            max={10} 
            id="guests" 
            defaultValue={book?.guests}
          />
          <label htmlFor="occasion">Occasion</label>
          <select 
            id="occasion"
            name='occasion'
            defaultValue={book?.occasion}
          >
            <option>-- Select --</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Engagement</option>
            <option>Others</option>
          </select>
        </>
    );
};

export default UserForm;