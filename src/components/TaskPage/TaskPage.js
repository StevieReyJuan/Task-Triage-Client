import React, { Component } from 'react';
import StaticToolbar from '../Navbar/StaticToolbar';
import Section, { Error } from '../Utils/Utils';
import TaskList from '../TaskList/TaskList';
import TaskTriageApiService from '../../services/endpoint-api-service';
import TasksContext from '../../context/TasksContext';
import './TaskPage.css';

class TaskPage extends Component {

    static defaultProps = {
        match: { params: {} }
    };

    static contextType = TasksContext;

    componentDidMount() {
        const { teamId } = this.props.match.params;

        this.context.clearError();

        TaskTriageApiService.getTasksByTeam(teamId)
            .then(this.context.setTasksList)
            .catch(this.context.setError);
    }

    render() {

        const { tasksList, error } = this.context;

        return (
            <>
                <StaticToolbar />
                {error && <Error message={error.error} />}
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