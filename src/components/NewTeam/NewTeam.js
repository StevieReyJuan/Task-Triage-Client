import React, { Component } from 'react';
import Section, { Form } from '../Utils/Utils';
import StaticToolbar from '../Navbar/StaticToolbar';
import TeamsContext from '../../context/TeamsContext';
import TaskTriageApiService from '../../services/endpoint-api-service';
import './NewTeam.css';

class NewTeam extends Component {

    static contextType = TeamsContext;

    handleSubmitTeam = e => {
        e.preventDefault();

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
        return (
            <>
                <StaticToolbar />
                <Section className='newTeam'>
                    <Form className='newTeam' onSubmit={this.handleSubmitTeam}>
                        <label htmlFor='team'>Team Name</label>
                        <input type='text' id='team' name='team' />
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