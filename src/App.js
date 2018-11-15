import React, { Component } from 'react';
import './App.css';
import MyApp from './MyApp';

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

            </div>
        );
    }
}

export default App;
