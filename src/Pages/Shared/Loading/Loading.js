import React from 'react';
import './Loading.css'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
    return (
        <div className='spinner'>
            <Spinner animation="border" variant="danger" />
        </div>
    );
};

export default Spinner;