import React, { Component } from 'react';

const TeamsContext = React.createContext({
    teamsList: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setTeamsList: () => {},
    clearTeamsList: () => {}
});

export default TeamsContext;

export class TeamsProvider extends Component {

    state = {
        teamsList: [],
        error: null
    };

    setTeamsList = teamsList => {
        this.setState({ teamsList });
    }

    setError = error => {
        this.setState({ error });
    }

    clearError = () => {
        this.setState({ error: null });
    }

    clearTeamsList = () => {
        this.setState({ teamsList: [] });
    }

    render() {
        const value = {
            teamsList: this.state.teamsList,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setTeamsList: this.setTeamsList,
            clearTeamsList: this.clearTeamsList
        };

        return (
            <TeamsContext.Provider value={value}>
                {this.props.children}
            </TeamsContext.Provider>
        );
    }

}