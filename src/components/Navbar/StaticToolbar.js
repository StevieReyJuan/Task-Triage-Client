import React from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css';

function StaticToolbar() {
    return (
        <header className='toolbar'>
            <nav className='toolbar__navigation'>
                <div className='toolbar__toggle-button' />
                <div className='toolbar__logo'><Link to='/teams/1'>Task Triage</Link></div>
                <div className='spacer' />
                <div className='toolbar__navigation-items'>
                    <ul>
                        <Link to='/teams'><li>Teams</li></Link>
                        <Link to='/completed'><li>Completed</li></Link>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default StaticToolbar;