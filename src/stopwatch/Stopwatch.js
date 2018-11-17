
import React, { Component } from 'react';

class Stopwatch extends Component {
    state = { lapse: 0, running: false }
    handleRunClick = () => {
        this.setState((state) => {
            if (state.running) {
                clearInterval(this.timer);
            } else {
                const startTime = Date.now() - this.state.lapse;
                this.timer = setInterval(() => {
                    this.setState({ lapse: Date.now() - startTime });
                }, 0);
            }
            return { running: !state.running };
        });
    }
    handleClearClick = () => {
        clearInterval(this.timer);
        this.setState({ lapse: 0, running: false });
    }
    render() {
        const { lapse, running } = this.state;
        return (
            <div>
                <p className="App-intro">stopwatch</p><br />
                <p>{lapse} ms</p>
                <button
                    onClick={this.handleRunClick}
                    className="stopwatchbutton">{running ? 'stop' : 'start'}</button>
                <button
                    onClick={this.handleClearClick}
                    className="stopwatchbutton">clear</button>
            </div>
        );
    }
}

export default Stopwatch;
