
import React, { Component } from 'react';
import { printSomething, printSomethingElse } from '../../jstest/test';

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

                <p>
                    <button
                        onClick={printSomething}
                        className="button">try js</button>
                </p>

                <p>
                    <button
                        onClick={printSomethingElse}
                        className="button">try js 2</button>
                </p>
            </div>
        );
    }
}

export default Clicker;
