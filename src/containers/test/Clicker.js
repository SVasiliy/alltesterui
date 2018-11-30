
import React, { Component } from 'react';

class Clicker extends Component {
    state = { eventCount: 0 }

    handleButtonClick = () => {
        this.state.eventCount = this.state.eventCount + 1;
        this.forceUpdate();
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
            </div>
        );
    }
}

export default Clicker;
