
import React, { Component } from 'react';
import { printSomething } from '../../jstest/test';

class Clicker extends Component {

    state = { eventCount: 0 };

    handleButtonClick = () => {
        this.setState({ eventCount: this.state.eventCount + 1 });
    }

    render() {
        const state = this.state;

        return (
            <div>
                <p className="App-intro">button clicker</p><br />
                <p>button clicked {state.eventCount} times</p>
                <p>
                    <button
                        onClick={this.handleButtonClick}
                        className="button">click counter</button>
                </p>
                <button
                    onClick={printSomething}
                    className="button">try js</button>
            </div>
        );
    }
}

export default Clicker;
