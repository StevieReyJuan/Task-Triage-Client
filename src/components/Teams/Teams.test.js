import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Teams from './Teams';

describe('Teams component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Teams />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});