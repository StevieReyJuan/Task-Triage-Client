import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                <td><Link to={`/teams/${team.id}`}>{team.id}</Link></td>
                <td>{team.name}</td>
                <td>{team.token}</td>
            </tr>
        );
    }

    render() {
        return (
            <>
                {/* <StaticToolbar></StaticToolbar> */}
                <div className="toolbar"/>
                <Section className='teams'>
                    <Table className='teams'>
                        <thead>
                            <tr>
                                <th>Team #</th>
                                <th>Team Name</th>
                                <th>Invite Key</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTeams()}
                        </tbody>
                    </Table>
                    <div className='teams__links'>
                        <Link to='/new-team'>Add a new Team</Link>
                        <Link to='/join-team'>Join an existing team</Link>
                    </div>
                </Section>
            </>
        );
    }
}

export default Teams;