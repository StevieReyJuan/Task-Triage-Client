import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NewTask from './NewTask';

describe('New Task component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <NewTask />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});