import React, { Component } from 'react';
import axios from 'axios';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import './Login.css';

const querystring = require('querystring');


class Loginform extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }

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
                console.log(res.data);
            });
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
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
                                type="text"
                                defaultValue={this.state.username}
                                onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                defaultValue={this.state.password}
                                onChange={this.handleChange}
                                type="password" />
                        </FormGroup>
                        <Button
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
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
