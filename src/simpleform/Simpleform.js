import React, { Component } from 'react';

class Simpleform extends Component {
    state = { lapse: 0 }

    render() {
        return (
            <form>
                <p> Name {this.lapse}
                    <input type="text" />
                    <button type="submit">submit</button>
                </p>
            </form>
        );
    }
}

export default Simpleform;
