import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

function Toolbar({ drawerClickHandler }) {
    
    return (
        <header className='toolbar'>
            <nav className='toolbar__navigation'>
                <div className='toolbar__toggle-button'>
                    <DrawerToggleButton click={drawerClickHandler}/>
                </div>
                <div className='toolbar__logo'><Link to='/teams'>Task Triage</Link></div>
                <div className='spacer' />
                <div className='toolbar__navigation-items'>
                    <ul>
                        <Link to='/'><li>Logout</li></Link>
                    </ul>
                </div>
            </nav>
        </header>   
    );
}

export default Toolbar;