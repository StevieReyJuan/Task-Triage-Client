import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import StaticToolbar from './StaticToolbar';

describe('Toolbar component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <StaticToolbar />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});