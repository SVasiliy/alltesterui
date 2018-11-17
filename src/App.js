import React, { Component } from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';
import './App.css';
import MyApp from './MyApp';
import Stopwatch from './stopwatch/Stopwatch';
import Simpleform from './simpleform/Simpleform';
import Restcall from './restcall/Restcall';

class App extends Component {
    state = { loading: false, compex: null };

    handleSelect = (eventKey) => {
        this.setState({ compex: eventKey });
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                        let&apos;s get started...
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <ButtonToolbar>
                        <DropdownButton
                            title="Menu"
                            id="dropdown-size-medium"
                            onSelect={this.handleSelect}>
                            <MenuItem eventKey="MyApp">Button clicker</MenuItem>
                            <MenuItem eventKey="Stopwatch">Stopwatch</MenuItem>
                            <MenuItem eventKey="Simpleform">Simpleform</MenuItem>
                            <MenuItem eventKey="Restcall">Rest call</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="null">Clear</MenuItem>
                        </DropdownButton>
                    </ButtonToolbar>
                </div>

                <br /><hr /><br />

                <div>
                    { this.state.compex === 'MyApp' ? <MyApp /> : null }
                    { this.state.compex === 'Stopwatch' ? <Stopwatch /> : null }
                    { this.state.compex === 'Simpleform' ? <Simpleform /> : null }
                    { this.state.compex === 'Restcall' ? <Restcall /> : null }
                </div>

            </div>
        );
    }
}

export default App;
