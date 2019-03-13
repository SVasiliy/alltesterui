
import React, { Component } from 'react';
import ChildComp from './ClickerChild';
import ButtonClicker from './ButtonClicker';
import FunctionCaller from './FunctionCaller';
import ClassCaller from './ClassCaller';
import ContextBinder from './ContextBinder';

class Clicker extends Component {

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

                <ContextBinder />

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
