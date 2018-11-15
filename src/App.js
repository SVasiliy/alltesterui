import React, { Component } from 'react';
import './App.css';
import MyApp from './MyApp';
import Stopwatch from './stopwatch/Stopwatch';

class App extends Component {
    state = { loading: false };

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                        let&apos;s get started...
                </p>

                <div>
                    <MyApp />
                </div>

                <p className="App-intro">
                        stopwatch
                </p>

                <div>
                    <Stopwatch />
                </div>

            </div>
        );
    }
}

export default App;
