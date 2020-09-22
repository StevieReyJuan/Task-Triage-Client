import React from 'react';
import './Backdrop.css';

function Backdrop({ click }) {
    return (
        <div className='backdrop' onClick={click}/>
    );
}

export default Backdrop;