
import React, { Component } from 'react';
import './CssPlay.css';

class CssPlay extends Component {

    state = null;

    render() {
        return (
            <div>
                Css Player
                <br />
                <div className="row">
                    <div className="column1">
                        <div className="div1">box1</div>
                        <div className="div1">box2</div>
                        <div className="div1">box3</div>
                    </div>
                    <div className="column2">column2</div>
                    <div className="column3">
                        <div className="div1">box1</div>
                        <div className="div1">box2</div>
                    </div>
                    <div className="column4">
                      column 4 (with float:both)
                    </div>
                </div>
            </div>
        );
    }
}

export default CssPlay;
