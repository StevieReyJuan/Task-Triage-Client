import React, { Component } from 'react';
import Section, { Form, Error } from '../Utils/Utils';
import StaticToolbar from '../Navbar/StaticToolbar';
import TeamsContext from '../../context/TeamsContext';
import TaskTriageApiService from '../../services/endpoint-api-service';
import './NewTeam.css';

class NewTeam extends Component {

    static contextType = TeamsContext;

    handleSubmitTeam = e => {
        e.preventDefault();
        this.context.clearError();

        const team_name = e.target.team;

        TaskTriageApiService.postTeam(team_name.value)
            .then(res => {
                team_name.value = '';
                this.props.history.goBack();
                // Add success message to context, display on team page?
            })
            .catch(this.context.setError);
    }

    render() {

        const { error } = this.context;

        return (
            <>
                <StaticToolbar />
                {error && <Error message={error.error} />}
                <Section className='newTeam'>
                    <Form className='newTeam' onSubmit={this.handleSubmitTeam}>
                        <label htmlFor='team'>Team Name</label>
                        <input type='text' id='team' name='team' required />
                        <button type='submit'>
                            Save
                        </button>
                    </Form>
                </Section>
            </>
        );
    }
}

export default NewTeam;