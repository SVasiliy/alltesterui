
import React, { Component } from 'react';
import { printSomething, ReactDeveloper } from '../../jstest/test';

class Clicker extends Component {

    state = {
        eventCount: 0,
        jobDescription: null,
    };

    handleButtonClick = () => {
        this.setState({ eventCount: this.state.eventCount + 1 });
    }

    setJobDescription = () => {
        const dev = new ReactDeveloper();
        this.setState({ jobDescription: dev.getJob() });
    }

    render() {
        const state = this.state;

        return (
            <div>
                <p className="App-intro">button clicker</p><br />
                <p>button clicked {state.eventCount} times</p>
                <p>
                    <button
                        onClick={this.handleButtonClick}
                        className="button">click counter</button>
                </p>

                <p>
                    <button
                        onClick={printSomething}
                        className="button">try js</button>
                </p>
                <br />
                <button
                    onClick={this.setJobDescription}
                    className="button">try js 2</button>
                <br />
                <p>job description: {state.jobDescription} </p>
            </div>
        );
    }
}

export default Clicker;
