
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { mobxState } from '../../App';

const Mobx = observer(class Mobx extends Component {

    handleInc = () => { mobxState.increment(); }
    handleDec = () => { mobxState.decrement(); }

    render() {
        return (
            <div>
                Counter: {mobxState.counter} <br />
                <button onClick={this.handleInc}> + </button>
                <button onClick={this.handleDec}> - </button>
            </div>
        );
    }

});

export default Mobx;
