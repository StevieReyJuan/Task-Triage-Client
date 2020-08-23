import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section, { Form } from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import './Login.css';
import TokenService from '../../services/token-service';

class Login extends Component {

    state = {
        error: null
    };

    handleSubmitJwtAuth = e => {
        e.preventDefault();
        this.setState({ error: null });
        const { username, password } = e.target;

        AuthApiService.postLogin({
            user_name: username.value,
            password: password.value
        })
            .then(res => {
                username.value = '';
                password.value = '';
                TokenService.saveAuthToken(res.authToken);
                this.props.history.push('/teams');
            })
            .catch(res => {
                this.setState({ error: res.error });
            });
    }

    render() {

        return (
            <Section className='login'>
                <Form className="login" onSubmit={this.handleSubmitJwtAuth}>
                    <fieldset name="login">
                        <legend>Task Triage</legend>

                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />

                        <button type="submit">Log in</button>
                    </fieldset>
                </Form>

                <p>Something something about Task Triage</p>

                <footer className="login__footer">
                    <p className="temp-styling">Demo credentials: Try any of:</p>
                    <p className="temp-styling">Username: test123/Password: test123</p>
                    <p className="temp-styling">Username: test456/Password: test456</p>
                    <p className="temp-styling">Username: test789/Password: test789</p>
                    <p className="temp-styling">New User? <Link to='/register'>SIGN UP</Link></p>
                </footer>
            </Section>
        );
    }
}

export default Login;