import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section, { Form } from '../Utils/Utils';
import './Signup.css';

class Signup extends Component {

    render() {

        return (
            <Section className='signup'>
                <Form className="signup">
                    <fieldset name="signup">
                        <legend>Register</legend>


                        <label htmlFor="nickname">Username</label>
                        <input type="text" name="nickname" id="nickname" required />

                        <label htmlFor="email">E-mail</label>
                        <input type="text" name="email" id="email" required />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" required />

                        <button type="submit" onClick={() => this.props.history.push('/')}>Register</button>
                        <button type="button" onClick={() => this.props.history.push('/')}>Back</button>
                    </fieldset>
                </Form>

                <footer className="signup__footer">
                    <p>Passwords must be between 8 and 72 characters long</p>
                </footer>
            </Section>
        );
    }
}

export default Signup;