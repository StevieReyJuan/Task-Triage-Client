import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CompletedTasks from './CompletedTasks';

describe('Completed Tasks component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <CompletedTasks />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});