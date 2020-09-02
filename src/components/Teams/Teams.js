import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Section, { Table } from '../Utils/Utils';
// import StaticToolbar from '../Navbar/StaticToolbar';
import TaskTriageApiService from '../../services/endpoint-api-service';
import TeamsContext from '../../context/TeamsContext';
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
                {/* <td><Link to={`/teams/${team.id}`}>{team.id}</Link></td> */}
                <td><Link to={`/teams/${team.id}`}>{team.name}</Link></td>
                <td>{team.token}</td>
            </tr>
        );
    }

    render() {

        const { error } = this.context;

        return (
            <>
                {/* <StaticToolbar></StaticToolbar> */}
                <nav className="toolbar">
                    <div className="toolbar__navigation">
                        <div className='toolbar__logo'><Link to='/teams'>Task + Triage</Link></div>
                    </div>
                </nav>

                {/* {error && <p className='error-message'>Couldn't retrieve teams</p>} */}

                <Section className='teams'>
                    {/* <div className='spacer' /> */}
                    {/* <p className='error-message'>Couldn't retrieve teams</p> */}
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