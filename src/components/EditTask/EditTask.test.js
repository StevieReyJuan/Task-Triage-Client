import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import EditTask from './EditTask';

describe('Edit Task component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <EditTask />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});