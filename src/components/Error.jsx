import React from 'react';
import '../style/Error.css'

const Error = ({children}) => {
    return (
        <div className='error'>
            {children}
        </div>
    );
};

export default Error;