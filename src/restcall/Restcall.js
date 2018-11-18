import React, { Component } from 'react';
import axios from 'axios';

class Restcall extends Component {
    state = {
        persons: [],
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.get(`https://jsonplaceholder.typicode.com/users/${event.target.elements.UserId.value}`)
            .then((res) => {
                const persons = res.data;
                this.setState({ persons });
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>enter user id &nbsp;
                        <input
                            type="text"
                            name="UserId" />

                        <button type="submit">submit</button>
                    </p>
                </form>
                <ul>
                    {this.state.persons.name != null ? 'username: ' : null } { this.state.persons.name }
                </ul>
            </div>
        );
    }
}

export default Restcall;
