import React, { Component } from 'react';
import Section from '../Utils/Utils';
import './NotFound.css';

export default class NotFound extends Component {
    render() {
        return (
            <Section className='notFound'>
                <h2>404 - Page not found</h2>
                <p>Try going back to your previous page.</p>
            </Section>
        );
    }
}