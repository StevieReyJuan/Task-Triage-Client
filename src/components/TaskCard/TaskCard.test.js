import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TaskCard from './TaskCard';

describe('Task Card component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <TaskCard />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});