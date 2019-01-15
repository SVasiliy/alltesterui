import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { observer, inject } from 'mobx-react';
import './Login.css';

const querystring = require('querystring');


const Loginform = inject('mobxstate')(observer(class Loginform extends Component {

    userHasAuthenticated = (authenticated) => { this.props.mobxstate.userHasAuthenticated(authenticated); }
    saveToken = (val) => { this.props.mobxstate.saveToken(val); }

    handleSubmit = (event) => {
        event.preventDefault();

        const requestBody = {
            username: event.target.elements.username.value,
            password: event.target.elements.password.value,
            grant_type: 'password',
        };

        axios.post(process.env.REACT_APP_KCURL,
                   querystring.stringify(requestBody),
                   { auth: { username: process.env.REACT_APP_KCLOGIN, password: process.env.REACT_APP_KCPWD },
                       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                   })
            .then((res) => {
                this.userHasAuthenticated(true);
                this.saveToken(res.data);
                // console.log(this.props.token);
            });

        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="username" bsSize="large">
                            <ControlLabel>Username</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text" />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                type="password" />
                        </FormGroup>
                        <Button
                            block
                            bsSize="large"
                            disabled={false} // {!this.validateForm()}
                            type="submit">
                                Login
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}));

export default Loginform;
