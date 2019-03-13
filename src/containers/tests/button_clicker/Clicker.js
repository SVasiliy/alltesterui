
import React, { Component } from 'react';
import ChildComp from './ClickerChild';
import ButtonClicker from './ButtonClicker';
import FunctionCaller from './FunctionCaller';
import ClassCaller from './ClassCaller';

function showContext() { console.log(this); }

class Clicker extends Component {

    constructor() {
        super();
        this.showContext = showContext.bind(this);
    }

    propObj = { value: 'test value' };
    // testF = propObj => { propObj = { value: 'test value 23' }; };

    render() {
        return (
            <div>
                <ButtonClicker />

                <br />
                <p className="App-intro">javascript tests</p><br />

                <FunctionCaller />

                <br /><br />

                <ClassCaller />

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
