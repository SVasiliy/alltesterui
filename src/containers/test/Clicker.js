
import React, { Component } from 'react';
import { printSomething, ReactDeveloper } from '../../jstest/test';

function doAlert() { alert(1); }


class Clicker extends Component {

//    constructor() {
//        super();
//       this.getThis = new ThisTester().getThis.bind(this);
//    }

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
                <br />

                <p className="App-intro">javascript tests</p><br />

                <button
                    onClick={printSomething}
                    className="button">try js</button>

                <br /><br />

                <button
                    onClick={this.setJobDescription}
                    className="button">try js 2</button>

                <br />
                <p>job description: {state.jobDescription} </p>

                <br />
                <button
                    onClick={doAlert}
                    className="button">call simple js function</button>
            </div>
        );
    }
}

export default Clicker;
