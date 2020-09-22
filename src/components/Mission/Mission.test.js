import React from 'react';
import ReactDOM from 'react-dom';
import Mission from './Mission';

describe('Mission component', () => {
    it('renders without crashing', () => {
        
        const div = document.createElement('div');
        ReactDOM.render(<Mission />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
