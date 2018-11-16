import React, { Component } from 'react';
import './App.css';
import MyApp from './MyApp';
import Stopwatch from './stopwatch/Stopwatch';
import Simpleform from './simpleform/Simpleform';

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

                <br /><hr /><br />
                <p className="App-intro">stopwatch</p>
                <div>
                    <Stopwatch />
                </div>

                <br /><hr /><br />
                <p className="App-intro">оракл формс тест</p>
                <div>
                    <Simpleform />
                </div>

            </div>
        );
    }
}

export default App;
