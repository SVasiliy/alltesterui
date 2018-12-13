
import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';


const Mobx = observer(class Mobx extends Component {

    state = { eventCount: 0 };
    mobxState = observable({
        counter: 0,
    });

    handleInc = () => { this.mobxState.counter = this.mobxState.counter + 1; }
    handleDec = () => { this.mobxState.counter = this.mobxState.counter - 1; }

    render() {
        return (
            <div>
                Counter: {this.mobxState.counter} <br />
                <button onClick={this.handleInc}> + </button>
                <button onClick={this.handleDec}> - </button>
            </div>
        );
    }

});

export default Mobx;
