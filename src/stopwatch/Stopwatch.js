
import React, { Component } from 'react';

class Stopwatch extends Component {
    state = { lapse: 0, running: false }

    render() {
        const { lapse, running } = this.state;
        return (
            <div>
                <p>{lapse} ms</p>
                <button
                    onClick={null}
                    className="stopwatchbutton">{running ? 'stop' : 'start'}</button>
                <button
                    onClick={null}
                    className="stopwatchbutton">clear</button>
            </div>
        );
    }
}

export default Stopwatch;
