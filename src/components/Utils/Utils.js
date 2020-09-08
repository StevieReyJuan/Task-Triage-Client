import React from 'react';
import './Utils.css';

export default function Section({ className, ...otherProps }) {
    return (
        <section className={['section', className].join(' ')} {...otherProps} />
    );
}

export function Form({ className, ...otherProps }) {
    return (
        <form 
            className={[className, 'form'].join('__')} 
            {...otherProps}
        />
    );
}

export function Table({ className, ...otherProps }) {
    return (
        <table 
            className={[className, 'table'].join('__')} 
            {...otherProps}
        />
    );
}

export function Error({ message }) {
    return (
        <div role='alert'>
            <p className='error-message'>{message}</p>
        </div>
    )
}