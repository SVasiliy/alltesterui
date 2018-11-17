import React, { Component } from 'react';

class Restcall extends Component {
    state = { error: null }

    render() {
        const { error } = this.state;
        return (
            <div>
                <p className="App-intro">restcall{error}</p><br />
            </div>
        );
    }
}

export default Restcall;
