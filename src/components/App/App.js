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
import NotFound from '../NotFound/NotFound';
import PrivateRoute from '../Utils/PrivateRoute';

class App extends Component {
    render() {
        return (
            <div className='App'>
                    <Switch >
                        <Route exact path='/' component={Login} />
                        <Route path='/register' component={Signup} />
                        <PrivateRoute exact path='/teams' component={Teams} />
                        <PrivateRoute exact path='/teams/:teamId' component={TaskPage} />
                        <PrivateRoute exact path='/teams/:teamId/new-task' component={NewTask} />
                        <PrivateRoute exact path='/teams/:teamId/:taskId' component={CardDetails}/>
                        <PrivateRoute exact path='/teams/:teamId/:taskId/edit-task' component={EditTask}/>
                        <PrivateRoute path='/join-team' component={JoinTeam} />
                        <PrivateRoute path='/new-team' component={NewTeam} />
                        <PrivateRoute path='/completed' component={CompletedTasks} />
                        <Route component={NotFound} />
                    </Switch>
            </div>
        );
    }
}

export default App;
