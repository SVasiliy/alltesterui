import React, { Component } from 'react';

class ChildComp extends Component {
    s = null;
    render() {
        return (<div>prop: {this.props.testProp.value}</div>);
    }
}

// const ChildComp = props => <div>prop: {props.testProp} </div>;

export default ChildComp;
