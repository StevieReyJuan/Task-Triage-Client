import React from 'react';
import './DrawerToggleButton.css';

function DrawerToggleButton({ click }) {
    return (
        <button className='toggle-button' onClick={click}>
            <div className='toggle-button__line' />
            <div className='toggle-button__line' />
            <div className='toggle-button__line' />
        </button>
    );
}

export default DrawerToggleButton;