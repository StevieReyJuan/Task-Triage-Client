import React, { Component } from 'react';
import { format } from 'date-fns';
import ResponsiveNavbar from '../Navbar/ResponsiveNavbar';
import Section, { Error } from '../Utils/Utils';
import TaskCard from '../TaskCard/TaskCard';
import TaskTriageApiService from '../../services/endpoint-api-service';
import TasksContext from '../../context/TasksContext';
import './CardDetails.css';

class CardDetails extends Component {
    static defaultProps = {
        match: { params: {} }
    };

    static contextType = TasksContext;

    componentDidMount() {
        const { teamId, taskId } = this.props.match.params;
        this.context.clearError();
        TaskTriageApiService.getTaskById(teamId, taskId)
            .then(this.context.setTaskDetails)
            .catch(this.context.setError);
    }

    handleArchiveTask= () => {
        const task = this.context.task;
        task.status = 'Done';

        TaskTriageApiService.updateTask(this.context.task)
            .then(task => {
                this.props.history.push(`/teams/${task.team}`);
                this.context.clearTaskDetails();
            })
            .catch(this.context.setError);
    }

    render() {

        const { task, error } = this.context;

        return (
            <>
                <ResponsiveNavbar />
                {error && <Error message='Could not display task details. Please try again.'/>}
                <Section className='cardDetails'>
                    <div className='cardDetails__wrapper'>
                        <TaskCard task={task}/>
                        <div className='cardDetails-content'>
                            <p>Last Modified: {format(task.date_modified, 'MMM Do YYYY')}</p>
                            {/* I hadn't considered it before, but it would have made more sense
                                to use the user's NAME rather than ID in my tables, as I would have been
                                able to display 'Modified By:' here. Todo! */}
                            <p className='align-left'>{task.content}</p>
                        </div>
                    </div>
                    <div className='cardDetails__buttons'>
                        <button type='button' onClick={() => this.props.history.push(`/teams/${this.props.match.params.teamId}/${this.props.match.params.taskId}/edit-task`)}>Edit</button>
                        {task.status === 'Done'}<button type='button' onClick={this.handleArchiveTask}>Archive</button>
                    </div>
                </Section>
            </>
        );
    }
}

export default CardDetails;