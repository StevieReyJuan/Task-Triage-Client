import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StaticToolbar from '../Navbar/StaticToolbar';
import Section from '../Utils/Utils';
import TaskList from '../TaskList/TaskList';
import './TaskPage.css';

class TaskPage extends Component {

    render() {
        return (
            <>
                <StaticToolbar />
                <Section className='taskPage'>
                    <TaskList status='Severe'>
                        <li><div className='taskCard'><Link to='/teams/1/1'>1</Link> Severe</div></li>
                        <li><div className='taskCard'><Link to='/teams/1/2'>2</Link> Severe</div></li>
                        <li><div className='taskCard'><Link to='/teams/1/3'>3</Link> Severe</div></li>
                    </TaskList>

                    <TaskList status='Elevated'>
                        <li><div className='taskCard'><Link to='/teams/1/4'>4</Link> Elevated</div></li>
                        <li><div className='taskCard'><Link to='/teams/1/4'>5</Link> Elevated</div></li>
                    </TaskList>

                    <TaskList status='Stable'>
                        <li><div className='taskCard'><Link to='/teams/1/6'>6</Link> Stable</div></li>
                    </TaskList>
                    
                    <button 
                        className='add-button' 
                        title='Add a task' 
                        type='button'
                        onClick={() => this.props.history.push('/new-task')}
                    >
                        +
                    </button>
                </Section>
            </>
        );
    }
}

export default TaskPage;