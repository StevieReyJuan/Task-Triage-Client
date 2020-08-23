import React, { Component } from 'react';

const TasksContext = React.createContext({
    tasksList: [],
    task: {},
    error: null,
    setError: () => {},
    clearError: () => {},
    setTasksList: () => {},
    clearTasksList: () => {},
    setTaskDetails: () => {},
    clearTaskDetails: () => {},
    updateTaskDetails: () => {}
});

export default TasksContext;

export class TasksProvider extends Component {

    state = {
        tasksList: [],
        task: {},
        error: null
    };

    setTasksList = tasksList => {
        this.setState({ tasksList });
    }

    setTaskDetails = task => {
        if (!task) {
            task = {}
        }

        this.setState({ task });
    }

    setError = error => {
        this.setState({ error });
    }

    clearError = () => {
        this.setState({ error: null });
    }

    clearTasksList = () => {
        this.setState({ tasksList: [] });
    }

    clearTaskDetails = () => {
        this.setTaskDetails();
    }

    updateTaskDetails = updatedTaskFields => {
        const updatedTask = {...this.state.task, ...updatedTaskFields};
        this.setTaskDetails(updatedTask);
    }

    render() {
        const value = {
            tasksList: this.state.tasksList,
            task: this.state.task,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setTasksList: this.setTasksList,
            clearTasksList: this.clearTasksList,
            setTaskDetails: this.setTaskDetails,
            clearTaskDetails: this.clearTaskDetails,
            updateTaskDetails: this.updateTaskDetails
        };

        return (
            <TasksContext.Provider value={value}>
                {this.props.children}
            </TasksContext.Provider>
        );
    }
}