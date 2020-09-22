import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import StaticToolbar from './StaticToolbar';
import Toolbar from './Toolbar';

describe('Navbar Toolbar components', () => {
    it('renders Static Toolbar without crashing', () => {
        
        const div = document.createElement('div');
        ReactDOM.render(
        <BrowserRouter>
            <StaticToolbar />
        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Toolbar w/ toggle without crashing', () => {
        
        const div = document.createElement('div');
        ReactDOM.render(
        <BrowserRouter>
            <Toolbar />
        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
