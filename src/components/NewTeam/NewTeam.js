import React, { Component } from 'react';
import Section, { Form } from '../Utils/Utils';
import StaticToolbar from '../Navbar/StaticToolbar';
import './NewTeam.css';

class NewTeam extends Component {
    render() {
        return (
            <>
                <StaticToolbar />
                <Section className='newTeam'>
                    <Form className='newTeam'>
                        <label htmlFor='new-team-name'>Team Name</label>
                        <input type='text' id='new-team-name' name='new-team' />
                        <button type='button' onClick={() => this.props.history.push('/teams')}>
                            Save
                        </button>
                    </Form>
                </Section>
            </>
        );
    }
}

export default NewTeam;