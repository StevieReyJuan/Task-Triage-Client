import TokenService from './token-service';
import config from '../config';

const TaskTriageApiService = {
    getTeams() {
        return fetch(`${config.API_ENDPOINT}/teams`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            return (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json();
        });
    },
    getTasksByTeam(teamId) {
        return fetch(`${config.API_ENDPOINT}/teams/${teamId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            return (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json();
        });
    },
    getTaskById(teamId, taskId) {
        return fetch(`${config.API_ENDPOINT}/teams/${teamId}/${taskId}`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            return (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json();
        });
    },
    postTeam(teamName) {
        return fetch(`${config.API_ENDPOINT}/teams`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(teamName)
        })
        .then(res => {
            return (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json();
        });
    },
    joinTeam(token) {
        return fetch(`${config.API_ENDPOINT}/teams/join-team`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(token)
        })
        .then(res => {
            return (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json();
        });
    },
    postTask(teamId, newTask) {
        return fetch(`${config.API_ENDPOINT}/teams/${teamId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newTask)
        })
        .then(res => {
            return (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json();
        });
    },
    updateTask(updatedTask) {
        return fetch(`${config.API_ENDPOINT}/teams/${updatedTask.team}/${updatedTask.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(updatedTask)
        })
        .then(res => {
            return (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json();
        });
    },
    archiveTask(updatedTask) {

        updatedTask.status = 'Done';

        return fetch(`${config.API_ENDPOINT}/teams/${updatedTask.team}/${updatedTask.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(updatedTask)
        })
        .then(res => {
            return (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json();
        });
    }
};

export default TaskTriageApiService;