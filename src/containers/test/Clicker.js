
import React, { Component } from 'react';
import ChildComp from './ClickerChild';
import { printSomething, ReactDeveloper } from '../../jstest/test';

function showContext() { console.log(this); }

class Clicker extends Component {

    constructor() {
        super();
        this.showContext = showContext.bind(this);
    }

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

    propObj = { value: 'test value' };
    // testF = propObj => { propObj = { value: 'test value 23' }; };

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
                    onClick={this.showContext}
                    className="button">show *this* context</button>

                <br />
                <ChildComp testProp={this.propObj} />

                <button
                    onClick={() => { this.propObj = { value: 'test value 2' }; this.setState({ jobDescription: 'jd changed' }); }}
                    className="button">change ChildProp</button>

            </div>
        );
    }
}

export default Clicker;
