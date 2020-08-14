import React, { Component } from 'react';
import Section, { Form } from '../Utils/Utils';
import StaticToolbar from '../Navbar/StaticToolbar';
import './NewTask.css';

class NewTask extends Component {
    render () {
        return (
            <>
                <StaticToolbar />
                <Section className='newTask'>
                    <Form className='newTask'>
                        <fieldset name="new-task">
                            {/* <legend>Create Task</legend> */}
                            <div className='select-container'>
                                <label htmlFor='status'>Status:</label>
                                <select name='status' id='status'>
                                    <option>Severe</option>
                                    <option>Elevated</option>
                                    <option>Stable</option>
                                </select>
                            </div>

                            <label htmlFor='title'>Title</label>
                            <input type='text' name='title' id='title' required />

                            <label htmlFor='body'>Details</label>
                            <textarea name='body' id='body' rows='5'/>

                            <button type='button' onClick={() => this.props.history.push('/teams/1')}>Discard</button>
                            <button type='submit' onClick={() => this.props.history.push('/teams/1')}>Save</button>
                        </fieldset>
                    </Form>
                </Section>
            </>
        );
    }
}

export default NewTask;