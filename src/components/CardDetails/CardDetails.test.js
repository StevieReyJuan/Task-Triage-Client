import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CardDetails from './CardDetails';

describe('Card Details component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <CardDetails />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});