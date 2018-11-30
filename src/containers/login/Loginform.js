import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import './Login.css';

const querystring = require('querystring');


class Loginform extends Component {

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
                this.props.userHasAuthenticated(true);
                this.props.saveToken(res.data.access_token);
                // console.log(this.props.token);
            });
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
}

export default Loginform;
