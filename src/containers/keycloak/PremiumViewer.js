
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

const PremiumViewer = inject('mobxstate')(observer(class PremiumViewer extends Component {
    state = null;
    render() {
        return (
            <div>
                {this.props.mobxstate.apiPremium} <br />
            </div>
        );
    }

}));

export default PremiumViewer;
