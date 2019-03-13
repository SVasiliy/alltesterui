
import React, { Component } from 'react';
import ButtonClicker from './ButtonClicker';
import FunctionCaller from './FunctionCaller';
import ClassCaller from './ClassCaller';
import ContextBinder from './ContextBinder';
import PropTester from './PropTester';

class Clicker extends Component {

    placeholder = null;

    render() {
        return (
            <div>

                <div className="clearfix">
                    <div className="box" style={{ backgroundColor: '#bbb' }}>
                        <p>Some text inside the box.</p>
                    </div>
                    <div className="box" style={{ backgroundColor: '#ccc' }}>
                        <p>Some text inside the box.</p>
                    </div>
                    <div className="box" style={{ backgroundColor: '#ddd' }}>
                        <p>Some text inside the box.</p>
                    </div>
                </div>


                <ButtonClicker />

                <br />
                <p className="App-intro">javascript tests</p><br />

                <FunctionCaller />

                <br /><br />

                <ClassCaller />

                <br />

                <ContextBinder />

                <br />
                <PropTester />


            </div>
        );
    }
}

export default Clicker;
