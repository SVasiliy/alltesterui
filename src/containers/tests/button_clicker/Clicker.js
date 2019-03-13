
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
                        <ButtonClicker />
                    </div>
                    <div className="box" style={{ backgroundColor: '#ccc' }}>
                        <FunctionCaller />
                    </div>
                    <div className="box" style={{ backgroundColor: '#ddd' }}>
                        <ClassCaller />
                    </div>
                </div>
                <div className="clearfix">
                    <div className="box" style={{ backgroundColor: '#ddd' }}>
                        <ContextBinder />
                    </div>
                    <div className="box" style={{ backgroundColor: '#ccc' }}>
                        <PropTester />
                    </div>
                    <div className="box" style={{ backgroundColor: '#bbb' }}>
                        <p>placeholder</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clicker;
