
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

const DummyKeycloaker = inject('mobxstate')(observer(class DummyKeycloaker extends Component {

    handleInc = () => { this.props.mobxstate.increment(); }
    handleDec = () => { this.props.mobxstate.decrement(); }

    render() {
        return (
            <div>
                dummy keycloak tester
            </div>
        );
    }

}));

export default DummyKeycloaker;
