
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

const DummyKeycloaker = inject('mobxstate')(observer(class DummyKeycloaker extends Component {

    handleInc = () => { this.props.mobxstate.increment(); }
    handleDec = () => { this.props.mobxstate.decrement(); }
    doAlert = () => { alert(111); }

    render() {
        return (
            <div>
                dummy keycloak tester
                <br />
                <hr />
                <br />
                /api/premium &nbsp; <button onClick={this.doAlert}>GET call</button>
                <br />
                <hr />
            </div>
        );
    }

}));

export default DummyKeycloaker;
