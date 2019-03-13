import React, { Component } from 'react';
import ChildComp from './ClickerChild';

class PropTester extends Component {

    propObj = { value: 'test value' };

    render() {
        return (<div>
            <button
                onClick={() => { this.propObj = { value: 'test value 2' }; this.setState({ jobDescription: 'jd changed' }); }}
                className="button">change ChildProp</button>
            <ChildComp testProp={this.propObj} />
        </div>);
    }

}

export default PropTester;
