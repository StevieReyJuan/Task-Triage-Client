import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Teams from '../Teams/Teams';
import TaskPage from '../TaskPage/TaskPage';
import JoinTeam from '../JoinTeam/JoinTeam';
import NewTeam from '../NewTeam/NewTeam';
import CompletedTasks from '../CompletedTasks/CompletedTasks';
import NewTask from '../NewTask/NewTask';
import CardDetails from '../CardDetails/CardDetails';
import EditTask from '../EditTask/EditTask';

class App extends Component {
    render() {
        return (
            <div className='App'>
                    <Switch >
                        <Route exact path='/' component={Login} />
                        <Route path='/register' component={Signup} />
                        <Route exact path='/teams' component={Teams} />
                        <Route exact path='/teams/:teamId' component={TaskPage} />
                        <Route exact path='/teams/:teamId/new-task' component={NewTask} />
                        <Route exact path='/teams/:teamId/:taskId' component={CardDetails}/>
                        <Route exact path='/teams/:teamId/:taskId/edit-task' component={EditTask}/>
                        <Route path='/join-team' component={JoinTeam} />
                        <Route path='/new-team' component={NewTeam} />
                        <Route path='/completed' component={CompletedTasks} />
                        {/* Not Found Page */}
                    </Switch>
            </div>
        );
    }
}

export default App;
