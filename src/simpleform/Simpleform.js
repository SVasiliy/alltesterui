import React, { Component } from 'react';

class Simpleform extends Component {
    state = { lapse: 0 }
    handleSubmit = (event) => {
        event.preventDefault();
       // console.log(event.target.elements.MyName.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p> Name {this.lapse}
                    <input type="text" name="MyName" />
                    <button type="submit">submit</button>
                </p>
            </form>
        );
    }
}

export default Simpleform;
