
import React from 'react';

const Stopwatch = ({ lapse, running }) => (
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

export default Stopwatch;
