import React, { Component } from 'react';
import Section, { Form, Error } from '../Utils/Utils';
import StaticToolbar from '../Navbar/StaticToolbar';
import TeamsContext from '../../context/TeamsContext';
import TaskTriageApiService from '../../services/endpoint-api-service';
import './JoinTeam.css';

class JoinTeam extends Component {

    static contextType = TeamsContext;

    handleSubmitTeam = e => {
        e.preventDefault();
        this.context.clearError();

        // console.log(e.target.token.value);
        const token = e.target.token;

        TaskTriageApiService.joinTeam(token.value)
            .then(res => {
                token.value = '';
                this.props.history.goBack();
            })
            .catch(this.context.setError);
    }

    render() {

        const { error } = this.context;

        return (
            <>
                <StaticToolbar />
                {error && <Error message={error.error}/>}
                <Section className='joinTeam'>
                    <Form className='joinTeam' onSubmit={this.handleSubmitTeam}>
                        <label htmlFor='token'>Team Key</label>
                        <input type='text' id='token' name='token' required />
                        <button type='submit'>
                            Join
                        </button>
                    </Form>
                </Section>
            </>
        );
    }
}

export default JoinTeam;