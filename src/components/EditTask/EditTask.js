import React, { Component } from 'react';
import Section, { Form, Error } from '../Utils/Utils';
import StaticToolbar from '../Navbar/StaticToolbar';
import TasksContext from '../../context/TasksContext';
import TaskTriageApiService from '../../services/endpoint-api-service';
import './EditTask.css';

class EditTask extends Component {

    static contextType = TasksContext;

    handleChange = e => {
        let { target: { name, value } } = e;

        const updatedTask = {[name]: value};
        this.context.updateTaskDetails(updatedTask);
    }

    handleSubmitTask = e => {
        e.preventDefault();
        this.context.clearError();

        TaskTriageApiService.updateTask(this.context.task)
            .then(task => {
                this.props.history.push(`/teams/${task.team}`);
                this.context.clearTaskDetails();
            })
            .catch(this.context.setError);
    }

    render () {

        const { task, error } = this.context;

        return (
            <>
                <StaticToolbar />
                {error && <Error message='Something went wrong. Please try again.' />}
                <Section className='editTask'>
                    <Form className='editTask' onSubmit={this.handleSubmitTask}>
                        <fieldset name="edit-task">
                            <legend>Edit Task</legend>
                            <div className='select-container'>
                                <label htmlFor='status'>Status:</label>
                                <select name='status' id='status' defaultValue={task.status} onChange={this.handleChange}>
                                    <option>Urgent</option>
                                    <option>Elevated</option>
                                    <option>Delay</option>
                                </select>
                            </div>

                            <label htmlFor='title'>Title</label>
                            <input type='text' name='title' id='title' defaultValue={task.title} onChange={this.handleChange} required />

                            <label htmlFor='content'>Details</label>
                            <textarea name='content' id='content' rows='5' onChange={this.handleChange} defaultValue={task.content} required/>

                            <button type='button' onClick={() => this.props.history.push('/teams/1')}>Discard</button>
                            <button type='submit'>
                                Save
                            </button>
                        </fieldset>
                    </Form>
                </Section>
            </>
        );
    }
}

export default EditTask;