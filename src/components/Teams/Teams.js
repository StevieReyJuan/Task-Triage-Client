import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section, { Table } from '../Utils/Utils';
import StaticToolbar from '../Navbar/StaticToolbar';
import './Teams.css';

class Teams extends Component {
    render() {
        return (
            <>
                <StaticToolbar></StaticToolbar>
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
                            <tr>
                                <td><Link to='/teams/1'>1</Link></td>
                                <td>Work</td>
                                <td>UUID1</td>
                            </tr>
                            <tr>
                                <td><Link to='/teams/2'>2</Link></td>
                                <td>Home</td>
                                <td>UUID2</td>
                            </tr>
                            <tr>
                                <td><Link to='/teams/3'>3</Link></td>
                                <td>Friends</td>
                                <td>UUID3</td>
                            </tr>
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