import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
    state = { temp: false }
    render() {
        return (
            <div className="Home">
                <div className="lander">
                    <h1>Alltester</h1>
                    <p>A simple app to test everything</p>
                </div>
            </div>
        );
    }
}
