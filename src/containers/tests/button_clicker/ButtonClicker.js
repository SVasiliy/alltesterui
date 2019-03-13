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
            <button
                onClick={this.handleButtonClick}
                className="button">click counter
            </button>
            <br />
            <p>button clicked {this.state.eventCount} times</p>
        </div>
        );
    }
}

export default ButtonClicker;
