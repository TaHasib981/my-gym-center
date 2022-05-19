import React from 'react';
import './Banner.css'
import gymBanner from '../../Images/gymBanner.jpg'
const Banner = () => {
    return (
        <div className='banner'>
            <img src={gymBanner} alt="" />
        </div>
    );
};

export default Banner;