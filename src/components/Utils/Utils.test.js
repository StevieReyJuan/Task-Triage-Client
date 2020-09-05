import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Section, { Form, Table, Error } from './Utils';

describe('Utility components', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Section>
                    <Form />
                    <Table />
                    <Error />
                </Section>
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});