import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className="footer-section">
           <h6>All rights reserved &copy; {year} </h6>
        </div>
    );
};

export default Footer;