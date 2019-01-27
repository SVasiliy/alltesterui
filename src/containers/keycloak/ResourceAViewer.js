import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

const ResourceAViewer = inject('mobxstate')(observer(class ResourceAViewer extends Component {
    state = null;
    render() {
        return (
            <div>
                {this.props.mobxstate.apiResourceA}
            </div>
        );
    }

}));

export default ResourceAViewer;
