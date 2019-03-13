
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
                    <div className="box" style={{ backgroundColor: '#F0F8FF' }}>
                        <ButtonClicker />
                    </div>
                    <div className="box" style={{ backgroundColor: '#F5FFFA' }}>
                        <FunctionCaller />
                    </div>
                    <div className="box" style={{ backgroundColor: '#F0F8FF' }}>
                        <ClassCaller />
                    </div>
                </div>
                <div className="clearfix">
                    <div className="box" style={{ backgroundColor: '#F5FFFA' }}>
                        <ContextBinder />
                    </div>
                    <div className="box" style={{ backgroundColor: '#F0F8FF' }}>
                        <PropTester />
                    </div>
                    <div className="box" style={{ backgroundColor: '#F5FFFA' }}>
                        <p>placeholder</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Clicker;
