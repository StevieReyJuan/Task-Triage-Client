import React from 'react';
import ReactDOM from 'react-dom';
import DrawerToggleButton from './DrawerToggleButton';

describe('Navbar drawer toggle button component', () => {
    it('renders without crashing', () => {
        
        const div = document.createElement('div');
        ReactDOM.render(<DrawerToggleButton />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
