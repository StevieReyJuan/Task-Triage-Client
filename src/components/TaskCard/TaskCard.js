import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TaskCard.css';

class TaskCard extends Component {
    static defaultProps = {
        task: { status: 'Delay' }
    };

    render() {

        const { task } = this.props;

        return (
            <div className={['taskCard', task.status].join(' ')}>
                <h3 className='taskCard__title'>
                    <Link to={`/teams/${task.team}/${task.id}`}>{task.title}</Link>
                </h3>
            </div>
        );
    }
}

export default TaskCard;