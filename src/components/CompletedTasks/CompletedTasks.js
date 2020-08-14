import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section, { Table } from '../Utils/Utils';
import './CompletedTasks.css';

class CompletedTasks extends Component {
    render() {
        return (
            <>
                <div className="toolbar"></div>
                <Section className='completedTasks'>
                    <Table className='completedTasks'>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Date Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Donezo</td>
                                <td>01/01/20</td>
                            </tr>
                            <tr>
                                <td>Finito</td>
                                <td>02/02/20</td>
                            </tr>
                        </tbody>
                    </Table>

                    <div className='completedTasks__links'>
                        <button type='button' onClick={() => this.props.history.goBack()}>Back</button>
                    </div>
                </Section>
            </>
        );
    }
}

export default CompletedTasks;