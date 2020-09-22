import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

function SideDrawer({ show }) {
    let drawerClasses = ['side-drawer'];
    if (show) {
        drawerClasses = ['side-drawer', 'open'];
    }
    
    return (
        <nav className={drawerClasses.join(' ')}>
            <ul>
                <Link to='/teams'><li>Teams</li></Link>
                <Link to='/completed'><li>Archived</li></Link>
            </ul>
        </nav>
    );
};

export default SideDrawer;