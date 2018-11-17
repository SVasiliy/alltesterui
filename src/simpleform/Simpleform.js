import React, { Component } from 'react';

class Simpleform extends Component {
    state = { error: 'null' }
    handleSubmit = (event) => {
        event.preventDefault();
       // console.log(event.target.elements.MyName.value);
    }

    getErrorMessage = (value) => {
        if (value.length < 5) {
            return 'Value is less than 5 characters';
        }
        return null;
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({ error: this.getErrorMessage(value) });
    }

    render() {
        const { error } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <p> Name
                    <input
                        type="text"
                        name="MyName"
                        onChange={this.handleChange} />
                    <button disabled={Boolean(error)} type="submit">submit</button>
                </p>
            </form>
        );
    }
}

export default Simpleform;
