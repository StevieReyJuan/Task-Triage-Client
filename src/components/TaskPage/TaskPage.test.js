import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TaskPage from './TaskPage';

describe('Task Page component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <TaskPage />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});