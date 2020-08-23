import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TasksContext from '../../context/TasksContext';
import Section, { Table } from '../Utils/Utils';
import { format } from 'date-fns';
import './CompletedTasks.css';

class CompletedTasks extends Component {

    static contextType = TasksContext;

    render() {

        const archivedTasks = this.context.tasksList.filter(task => {
            return task.status === 'Done'})
                .map(task => {
                    return (
                        <tr key={task.id}>
                            <td><Link to={`/teams/${task.team}/${task.id}`}>{task.id}</Link></td>
                            <td>{task.title}</td>
                            <td>{format(task.date_modified, 'MMM Do YYYY')}</td>
                        </tr>
                    );
                });
        
        return (
            <>
                <div className="toolbar"></div>
                <Section className='completedTasks'>
                    <Table className='completedTasks'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Date Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {archivedTasks}
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