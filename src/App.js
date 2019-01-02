import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Provider } from 'mobx-react';
import './App.css';
import Routes from './Routes';
import MobxState from './components/MobxState';


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
        localStorage.setItem('token', JSON.stringify(val));
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

        const mobxstate = new MobxState();

        return (
            <Provider mobxstate={mobxstate}>
                <div className="App container">
                    <Navbar fluid collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/">Alltester v3.0</Link>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            {
                                // this.state.isAuthenticated
                                // ?
                                <Nav>
                                    <NavDropdown title="Tests" id="basic-nav-dropdown">
                                        <LinkContainer to="/clicker">
                                            <MenuItem>Button clicker</MenuItem>
                                        </LinkContainer>
                                        <LinkContainer to="/stopwatch">
                                            <MenuItem>Stopwatch</MenuItem>
                                        </LinkContainer>
                                        <LinkContainer to="/users">
                                            <MenuItem>User list</MenuItem>
                                        </LinkContainer>
                                        <LinkContainer to="/react-bootstrap-table2">
                                            <MenuItem>react-bootstrap-table2</MenuItem>
                                        </LinkContainer>
                                        <LinkContainer to="/mobx">
                                            <MenuItem>Mobx</MenuItem>
                                        </LinkContainer>
                                    </NavDropdown>
                                </Nav>
                                // : null
                            }
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
            </Provider>
        );
    }
}

export default withRouter(App);
