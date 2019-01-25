import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Provider } from 'mobx-react';
import './App.css';
import Routes from './Routes';
import MobxState from './components/MobxState';
import Loginbutton from './containers/login/Loginbutton';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            placeholder: null,
        };
    }

    mobxstate = new MobxState();

    render() {
        const childProps = {
            placeholder: null,
        };

        return (
            <Provider mobxstate={this.mobxstate}>
                <div className="App container">
                    <Navbar fluid collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link to="/">Alltester v3.1</Link>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            {
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
                                        <LinkContainer to="/cssplay">
                                            <MenuItem>CSS Play</MenuItem>
                                        </LinkContainer>
                                    </NavDropdown>
                                    <NavDropdown title="Keycloak" id="basic-nav-dropdown">
                                        <LinkContainer to="/dummykeycloaker">
                                            <MenuItem>Keycloaker</MenuItem>
                                        </LinkContainer>
                                    </NavDropdown>
                                </Nav>
                            }
                            <Nav pullRight>
                                <Loginbutton />
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
