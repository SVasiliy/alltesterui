
import React, { Component } from 'react';
import Devtools from 'mobx-react-devtools';
import { observer, inject } from 'mobx-react';

const MobxChild = inject('mobxstate')(observer(class MobxChild extends Component {
    state = null;
    render() {
        return (
            <div>
                <Devtools />
                computed counter value: {this.props.mobxstate.computedCounter} <br />
            </div>
        );
    }

}));

export default MobxChild;
