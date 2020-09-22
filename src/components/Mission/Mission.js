import React from 'react';
import Section from '../Utils/Utils';
import './Mission.css';

function Mission({ click }) {
    return (
        <div className='backdrop'>
            <Section className='mission'>
                <div className='mission-box'>
                    <h2>Welcome to Task Triage!</h2>
                    <p>Task Triage is collaborative organization app</p>
                    <p>Create teams and tasks to manage with your friends</p>
                    <p>Assign priority to tasks and keep each other accountable</p>
                    <p>Avoid the potential disaster of procrastination!</p>
                    <button onClick={click}>Let's go!</button>
                </div>
            </Section>
        </div>
    );
}

export default Mission;