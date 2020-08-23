import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StaticToolbar from '../Navbar/StaticToolbar';
import Section from '../Utils/Utils';
import TaskList from '../TaskList/TaskList';
import TaskTriageApiService from '../../services/endpoint-api-service';
import TasksContext from '../../context/TasksContext';
import './TaskPage.css';

class TaskPage extends Component {

    static contextType = TasksContext;

    componentDidMount() {
        const { teamId } = this.props.match.params;

        this.context.clearError();
        TaskTriageApiService.getTasksByTeam(teamId)
            .then(this.context.setTasksList)
            .catch(this.context.setError);
    }

    render() {

        const { tasksList } = this.context;

        return (
            <>
                <StaticToolbar />
                <Section className='taskPage'>
                    <TaskList tasks={tasksList} status='Urgent' />

                    <TaskList tasks={tasksList} status='Elevated' />

                    <TaskList tasks={tasksList} status='Delay' />
                    
                    <button 
                        className='add-button' 
                        title='Add a task' 
                        type='button'
                        onClick={() => this.props.history.push(`/teams/${this.props.match.params.teamId}/new-task`)}
                    >
                        +
                    </button>
                </Section>
            </>
        );
    }
}

export default TaskPage;