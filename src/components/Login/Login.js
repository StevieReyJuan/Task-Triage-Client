import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section, { Form, Error } from '../Utils/Utils';
import AuthApiService from '../../services/auth-api-service';
import './Login.css';
import TokenService from '../../services/token-service';

class Login extends Component {

    state = {
        error: null,
        loading: false
    };

    handleSubmitJwtAuth = e => {
        e.preventDefault();
        this.setState({ error: null });
        this.setState({ loading: true });
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
                this.setState({ loading: false });
            });
    }

    render() {

        const { error } = this.state;

        return (
            <Section className='login'>
                {error && <Error message={error}/>}
                <header>
                    <p className={'logo ' + (this.state.loading ? 'spin' : '')}>+</p>
                    <p className='spacer'></p>
                    <p className='big-name'>Task Triage</p>
                </header>
                <main>
                    <Form className='login' onSubmit={this.handleSubmitJwtAuth}>
                        <fieldset name='login'>
                            <legend>Task Triage</legend>

                            <label htmlFor='username'>Username</label>
                            <input type='text' name='username' id='username' required />

                            <label htmlFor='password'>Password</label>
                            <input type='password' name='password' id='password' required />

                            <button type='submit'>Log in</button>
                        </fieldset>
                    </Form>
                </main>

                <p className='wrap'>Organize your "to-do" list with Task Triage and get things done...</p>
                <p>A plan can be a real life saver!</p>

                <footer className='login__footer'>
                    <p>Demo credentials: Try any of:</p>
                    <p>Username: test123/Password: test123</p>
                    <p>Username: test456/Password: test456</p>
                    <p>Username: test789/Password: test789</p>
                    <p>New User? <Link to='/register'>SIGN UP</Link></p>
                </footer>
            </Section>
        );
    }
}

export default Login;