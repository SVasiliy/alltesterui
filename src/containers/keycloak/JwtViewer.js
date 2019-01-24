
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

const JwtViewer = inject('mobxstate')(observer(class JwtViewer extends Component {
    state = null;
    render() {
        return (
            <div>
                <pre>{JSON.stringify(this.props.mobxstate.accessTokenJSON, null, 2)}</pre>
            </div>
        );
    }

}));

export default JwtViewer;
