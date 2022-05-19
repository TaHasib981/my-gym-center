import React from 'react';
import './NotFound.css'
import notfound from '../../Images/notfound.png'
const NotFound = () => {
    return (
        <div className='notfound'>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;