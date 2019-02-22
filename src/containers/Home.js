import React, { Component } from 'react';
import axios from 'axios';
import './Home.css';

export default class Home extends Component {
    state = { version: null }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_APIURL}/version`)
            .then((response) => {
                this.setState({ version: response.data });
            });
    }

    render() {
        return (
            <div className="Home">
                <div className="lander">
                    <h1>Alltester</h1>
                    <p>A simple app to test everything</p>
                    <p>props v. {this.state.version}</p>
                </div>
            </div>
        );
    }
}
