import React, { Component } from 'react';
import Section, { Form } from '../Utils/Utils';
import StaticToolbar from '../Navbar/StaticToolbar';
import TasksContext from '../../context/TasksContext';
import TaskTriageApiService from '../../services/endpoint-api-service';
import './NewTask.css';

class NewTask extends Component {

    static contextType = TasksContext;

    handleSubmitTask = e => {
        e.preventDefault();

        const { status, content, title } = e.target;

        const newTask = {
            status: status.value,
            content: content.value,
            title: title.value
        };

        TaskTriageApiService.postTask(this.props.match.params.teamId, newTask)
            .then(task => {
                this.props.history.push(`/teams/${task.team}`);
            })
            .catch(this.context.setError);
    }

    render () {
        return (
            <>
                <StaticToolbar />
                <Section className='newTask'>
                    <Form className='newTask' onSubmit={this.handleSubmitTask}>
                        <fieldset name="new-task">
                            {/* <legend>Create Task</legend> */}
                            <div className='select-container'>
                                <label htmlFor='status'>Status:</label>
                                <select name='status' id='status'>
                                    <option>Urgent</option>
                                    <option>Elevated</option>
                                    <option>Delay</option>
                                </select>
                            </div>

                            <label htmlFor='title'>Title</label>
                            <input type='text' name='title' id='title' required />

                            <label htmlFor='content'>Details</label>
                            <textarea name='content' id='content' rows='5' required/>

                            <button type='button' onClick={() => this.props.history.goBack()}>Discard</button>
                            <button type='submit'>Save</button>
                        </fieldset>
                    </Form>
                </Section>
            </>
        );
    }
}

export default NewTask;