import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Section, { Table, Error } from '../Utils/Utils';
import TaskTriageApiService from '../../services/endpoint-api-service';
import TeamsContext from '../../context/TeamsContext';
import ResponsiveNavbar from '../Navbar/ResponsiveNavbar';
import './Teams.css';

class Teams extends Component {

    static contextType = TeamsContext;

    componentDidMount() {
        this.context.clearError();
        TaskTriageApiService.getTeams()
            .then(this.context.setTeamsList)
            .catch(this.context.setError);
    };

    renderTeams() {
        const { teamsList = [] } = this.context;

        return teamsList.map(team => 
            <tr key={team.id}>
                <td><Link to={`/teams/${team.id}`}>{team.name}</Link></td>
                <td>{team.token}</td>
            </tr>
        );
    }

    render() {

        const { error, teamsList } = this.context;

        return (
            <>
                <ResponsiveNavbar />

                <Section className='teams'>
                    {error && <Error message='Something went wrong! No teams to display. Please try again.'/>}
                    {!teamsList.length && <p className='no-teams'>You aren't on any teams! Join one or create your own.</p>}
                    <Table className='teams'>
                        <thead>
                            <tr>
                                <th>Team Name</th>
                                <th>Invite Key</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTeams()}
                        </tbody>
                    </Table>
                    <div className='teams__links'>
                        <NavLink className='button' to='/new-team'>Add a new Team</NavLink>
                        <NavLink className='button' to='/join-team'>Join an existing team</NavLink>
                    </div>
                </Section>
            </>
        );
    }
}

export default Teams;