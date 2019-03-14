import React, { Component } from 'react';
import PropTesterChild from './PropTesterChild';

/*
not only change of states triggers re-render
but also if a property passed to the child is changed - re-render is triggered

note: nope, in the case described above "this.forceUpdate()" is needed and it is a discourage practice.
Better use state for such needs.
*/
class PropTester extends Component {

    propObj = { value: 'test value' };

    render() {
        return (<div>
            <button
                onClick={() => { this.propObj = { value: 'test value 2' }; this.forceUpdate(); }}
                className="button">change ChildProp</button>
            <PropTesterChild testProp={this.propObj} />
        </div>);
    }

}

export default PropTester;
