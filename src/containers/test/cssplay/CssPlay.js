
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
                    <div className="column1">div1</div>
                    <div className="column2">div2</div>
                </div>
            </div>
        );
    }
}

export default CssPlay;
