import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import Routes from './Routes';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            token: null,
        };
    }

    userHasAuthenticated = (authenticated) => {
        this.setState({ isAuthenticated: authenticated });
    }

    saveToken = (val) => {
        this.setState({ token: val });
    }

    handleLogout = () => {
        this.userHasAuthenticated(false);
        this.props.history.push('/login');
    }

    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            token: this.state.token,
            userHasAuthenticated: this.userHasAuthenticated,
            saveToken: this.saveToken,
        };

        return (
            <div className="App container">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Main</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            {
                                this.state.isAuthenticated
                                ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                                : <LinkContainer to="/login">
                                    <NavItem>Login</NavItem>
                                </LinkContainer>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Routes childProps={childProps} />
            </div>
        );
    }
}

export default withRouter(App);
