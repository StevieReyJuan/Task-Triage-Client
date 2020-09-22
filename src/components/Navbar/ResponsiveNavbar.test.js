import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ResponsiveNavbar from './ResponsiveNavbar';

describe('Responsive Navbar component', () => {
    it('renders Navbar without crashing', () => {
        
        const div = document.createElement('div');
        ReactDOM.render(
        <BrowserRouter>
            <ResponsiveNavbar />
        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});