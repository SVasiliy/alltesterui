import React, { Component } from 'react';

class ChildComp extends Component {
    s = null;
    render() {
        return (<div>prop: {this.props.testProp.value}</div>);
    }
}

export default ChildComp;
