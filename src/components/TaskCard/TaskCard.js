import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TaskCard.css';

class TaskCard extends Component {
    render() {
        return (
            <div className='taskCard'>
                <h3 className='taskCard__title'>
                    {this.props.title}
                </h3>
            </div>
        );
    }
}

export default TaskCard;