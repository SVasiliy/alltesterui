import React, { Component } from 'react';

function showContext() { console.log(this); }

class ContextBinder extends Component {

    constructor() {
        super();
        this.showContext = showContext.bind(this);
    }

    render() {
        return (<div>
            <button
                onClick={this.showContext}
                className="button">show *this* context</button>
        </div>);
    }

}

export default ContextBinder;
