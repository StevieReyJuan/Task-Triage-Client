import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SideDrawer from '././SideDrawer';

describe('Navbar Sidedrawer component', () => {
    it('renders without crashing', () => {
        
        const div = document.createElement('div');
        ReactDOM.render(
        <BrowserRouter>
            <SideDrawer />
        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
