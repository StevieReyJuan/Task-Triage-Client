import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section, { Form } from '../Utils/Utils';
import './Login.css';

class Login extends Component {

    render() {

        return (
            <Section className='login'>
                <Form className="login">
                    <fieldset name="login">
                        <legend>Task Triage</legend>

                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />

                        <button type="submit" onClick={() => this.props.history.push('/teams')}>Log in</button>
                    </fieldset>
                </Form>

                <p>Something something about Task Triage</p>

                <footer className="login__footer">
                    <p>To join a test board, click <Link to='/teams'>HERE</Link></p>
                    <p>New User? <Link to='/register'>SIGN UP</Link></p>
                </footer>
            </Section>
        );
    }
}

export default Login;