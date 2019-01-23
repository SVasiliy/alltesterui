
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

const JwtViewer = inject('mobxstate')(observer(class JwtViewer extends Component {
    state = null;
    render() {
        return (
            <div>
                {JSON.stringify(this.props.mobxstate.accessTokenJSON)}
            </div>
        );
    }

}));

export default JwtViewer;
