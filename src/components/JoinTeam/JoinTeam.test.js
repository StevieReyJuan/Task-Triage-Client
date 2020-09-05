import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import JoinTeam from './JoinTeam';

describe('Join Team component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <JoinTeam />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});