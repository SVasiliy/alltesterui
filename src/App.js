import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './App.css';
import Routes from './Routes';

class App extends Component {
    state = { loading: false, compex: null };

    handleSelect = (eventKey) => {
        this.setState({ compex: eventKey });
    }

    render() {
        return (
            <div className="App container">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Main</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>
                <Routes />
            </div>
        );
    }
}

export default App;
