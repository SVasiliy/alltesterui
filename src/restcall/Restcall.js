import React, { Component } from 'react';
import axios from 'axios';

class Restcall extends Component {
    state = {
        persons: [],
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(process.env.REACT_APP_APIURL);
        axios.get(`${process.env.REACT_APP_APIURL}/users/${event.target.elements.UserId.value}`)
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
                    {this.state.persons.name != null ? 'user fullname: ' : null } { this.state.persons.name }
                </ul>
            </div>
        );
    }
}

export default Restcall;
