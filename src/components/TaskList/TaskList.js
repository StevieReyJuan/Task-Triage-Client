import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TaskCard from '../TaskCard/TaskCard';
import StaticToolbar from '../Navbar/StaticToolbar';
import Section from '../Utils/Utils'
import './TaskList.css';
import { logicalExpression } from '@babel/types';

class TaskList extends Component {

    render() {
        return (
            <Section className='taskList'>
                <h2>{this.props.status}</h2>
                <ul>
                    {this.props.children}
                    {/* map through priority level and create cards */}

                    {/* <li>
                        <TaskCard 
                            id={}
                            title={}
                        />
                    </li> */}
                </ul>
            </Section>
        );
    }
}

export default TaskList;