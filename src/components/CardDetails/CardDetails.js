import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import StaticToolbar from '../Navbar/StaticToolbar';
import Section from '../Utils/Utils';
import TaskCard from '../TaskCard/TaskCard';
import TaskTriageApiService from '../../services/endpoint-api-service';
import TasksContext from '../../context/TasksContext';
import './CardDetails.css';

class CardDetails extends Component {

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
        return (
            <>
                <StaticToolbar />
                <Section className='cardDetails'>
                    <TaskCard task={this.context.task}/>
                    <div className='cardDetails-content'>
                        {/* {__.content.split(/\n \r|\n/).map((para, i) =>
                            <p key={i}>{para}</p>
                        )} */}
                        <p>{this.context.task.content}</p>
                    </div>
                    <div className='cardDetails__buttons'>
                        <button type='button' onClick={() => this.props.history.push(`/teams/${this.props.match.params.teamId}/${this.props.match.params.taskId}/edit-task`)}>Edit</button>
                        <button type='button' onClick={this.handleArchiveTask}>Archive</button>
                    </div>
                </Section>
            </>
        );
    }
}

export default CardDetails;