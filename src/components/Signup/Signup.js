import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service';
import Section, { Form } from '../Utils/Utils';
import './Signup.css';

class Signup extends Component {

    state = {
        error: null
    };

    handleSubmit = e => {
        e.preventDefault();
        const { name, username, password } = e.target;

        this.setState({ error: null });

        AuthApiService.postUser({
            name: name.value,
            user_name: username.value,
            password: password.value
        })
            .then(res => {
                name.value = '';
                username.value = '';
                password.value = '';

                this.props.history.goBack();
            })
            .catch(res => {
                this.setState({ error: res.error });
            });
    }

    render() {

        // const { error } = this.state;

        return (
            <Section className='signup'>
                {/* {error && <p className='error-message'>{error}</p>} */}
                <Form className="signup" onSubmit={this.handleSubmit}>
                    <fieldset name="signup">
                        <legend>Register</legend>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Sally" required />

                        <label htmlFor="username">User Name</label>
                        <input type="text" name="username" id="username" placeholder="sallystudent123" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="hunter2" required />

                        <button type="submit">Register</button>
                        <button type="button" onClick={() => this.props.history.push('/')}>Back</button>
                    </fieldset>
                </Form>

                <footer className="signup__footer">
                    <p>Passwords must be between 7 and 72 characters long</p>
                </footer>
            </Section>
        );
    }
}

export default Signup;