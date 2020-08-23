import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import TaskCard from '../TaskCard/TaskCard';
// import StaticToolbar from '../Navbar/StaticToolbar';
import Section from '../Utils/Utils';
import './TaskList.css';

class TaskList extends Component {

    render() {
        const tasksByStatus = this.props.tasks.filter(task => {
            return task.status === this.props.status})
                .map(task => {
                    return (
                        <li key={task.id}>
                            <TaskCard task={task} />
                        </li>
                    );
                });

        return (
            <Section className='taskList'>
                <h2>{this.props.status}</h2>
                <ul>
                    {tasksByStatus}
                </ul>
            </Section>
        );
    }
}

export default TaskList;