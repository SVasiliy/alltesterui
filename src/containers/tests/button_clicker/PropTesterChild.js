import React, { Component } from 'react';

class PropTesterChild extends Component {
    s = null;
    render() {
        return (<div>prop: {this.props.testProp.value}</div>);
    }
}

export default PropTesterChild;
