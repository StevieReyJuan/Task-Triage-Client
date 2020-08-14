import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StaticToolbar from '../Navbar/StaticToolbar';
import Section, { Table } from '../Utils/Utils';
import TaskCard from '../TaskCard/TaskCard';
import './CardDetails.css';

class CardDetails extends Component {

    render() {
        return (
            <>
                <StaticToolbar />
                <Section className='cardDetails'>
                    <TaskCard title='title'>

                    </TaskCard>
                    <Table className='cardDetails'>
                        {/* {__.content.split(/\n \r|\n/).map((para, i) =>
                            <p key={i}>{para}</p>
                        )} */}
                    </Table>
                    <div className='cardDetails__buttons'>
                        <button type='button' onClick={() => this.props.history.push('/new-task')}>Edit</button>
                        <button type='button' onClick={() => this.props.history.push('/teams/1')}>Delete</button>
                    </div>
                </Section>
            </>
        );
    }
}

export default CardDetails;