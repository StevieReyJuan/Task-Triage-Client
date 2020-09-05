import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TaskList from './TaskList';

describe('Task List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <TaskList />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});