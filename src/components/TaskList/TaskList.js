import React, { Component } from 'react';
import TaskCard from '../TaskCard/TaskCard';
import Section from '../Utils/Utils';
import './TaskList.css';

class TaskList extends Component {

    static defaultProps = {
        tasks: []
    };

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
            <Section className={['taskList', this.props.status].join(' ')}>
                <h2>{this.props.status}</h2>
                <ul>
                    {tasksByStatus}
                </ul>
            </Section>
        );
    }
}

export default TaskList;