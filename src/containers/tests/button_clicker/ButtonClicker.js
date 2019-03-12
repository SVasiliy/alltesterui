import React, { Component } from 'react';

class ButtonClicker extends Component {

    state = {
        eventCount: 0,
    };

    handleButtonClick = () => {
        this.setState({ eventCount: this.state.eventCount + 1 });
    }

    render() {
        return (<div>
            <p className="App-intro">button clicker</p><br />
            <p>button clicked {this.state.eventCount} times</p>
            <br />
            <button
                onClick={this.handleButtonClick}
                className="button">click counter
            </button>
        </div>
        );
    }
}

export default ButtonClicker;
