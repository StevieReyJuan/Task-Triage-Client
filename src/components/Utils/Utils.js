import React from 'react';

export default function Section({ className, ...otherProps }) {
    return (
        <section className={['section', className].join(' ')} {...otherProps} />
    );
}

export function Form({ className, ...otherProps }) {
    return (
        <form 
            className={[className, 'form'].join('__')} 
            // action='#'
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