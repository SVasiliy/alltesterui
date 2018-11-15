
import React, { Component } from 'react';

class MyApp extends Component {
    state = { eventCount: 0 }

    handleButtonClick = () => {
        this.state.eventCount = this.state.eventCount + 1;
        this.forceUpdate();
    }

    render() {
        const state = this.state;

        return (
            <div>
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

export default MyApp;
