
import React, { Component } from 'react';
import Devtools from 'mobx-react-devtools';
import { observer, inject } from 'mobx-react';
import MobxChild from './MobxChild';

const Mobx = inject('mobxstate')(observer(class Mobx extends Component {

    handleInc = () => { this.props.mobxstate.increment(); }
    handleDec = () => { this.props.mobxstate.decrement(); }

    render() {
        return (
            <div>
                <Devtools />
                Counter: {this.props.mobxstate.counter} <br />
                <button onClick={this.handleInc}> + </button>
                <button onClick={this.handleDec}> - </button>
                <br /><br /><br />
                <MobxChild />
            </div>
        );
    }

}));

export default Mobx;
