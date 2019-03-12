
import React, { Component } from 'react';
import ChildComp from './ClickerChild';
import { printSomething, ReactDeveloper } from './test';
import ButtonClicker from './ButtonClicker';

function showContext() { console.log(this); }

class Clicker extends Component {

    constructor() {
        super();
        this.showContext = showContext.bind(this);
    }

    state = {
        jobDescription: null,
    };

    setJobDescription = () => {
        const dev = new ReactDeveloper();
        this.setState({ jobDescription: dev.getJob() });
    }

    propObj = { value: 'test value' };
    // testF = propObj => { propObj = { value: 'test value 23' }; };

    render() {
        return (
            <div>
                <ButtonClicker />

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
                <p>job description: {this.state.jobDescription} </p>

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
