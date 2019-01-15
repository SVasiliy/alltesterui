import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { observer, inject } from 'mobx-react';


const Loginbutton = inject('mobxstate')(observer(class Loginbutton extends Component {

    logout = () => { this.props.mobxstate.logout(); }

    render() {
        const loginbutton = this.props.mobxstate.isAuthenticated
                                ? <NavItem onClick={this.logout}>Logout</NavItem>
                                : (<LinkContainer to="/login">
                                    <NavItem>Login</NavItem>
                                </LinkContainer>);

        return (loginbutton);
    }

}));

export default Loginbutton;
