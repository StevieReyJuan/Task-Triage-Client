import React, { Component } from 'react';
import Section, { Form } from '../Utils/Utils';
import StaticToolbar from '../Navbar/StaticToolbar';
import './JoinTeam.css';

class JoinTeam extends Component {
    render() {
        return (
            <>
                <StaticToolbar />
                <Section className='joinTeam'>
                    <Form className='joinTeam'>
                        <label htmlFor='join-team-code'>Team Key</label>
                        <input type='text' id='join-team-code' name='join-team' />
                        <button type='button' onClick={() => this.props.history.push('/teams')}>
                            Join
                        </button>
                    </Form>
                </Section>
            </>
        );
    }
}

export default JoinTeam;