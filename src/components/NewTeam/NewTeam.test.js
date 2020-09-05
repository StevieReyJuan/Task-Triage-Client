import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import NewTeam from './NewTeam';

describe('New Team component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <NewTeam />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});