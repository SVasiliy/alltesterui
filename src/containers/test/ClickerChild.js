import React, { Component } from 'react';

class ChildComp extends Component {
    s = null;
    render() {
        return (<div>prop: {this.props.testProp}</div>);
    }
}

// const ChildComp = props => <div>prop: {props.testProp} </div>;

export default ChildComp;
