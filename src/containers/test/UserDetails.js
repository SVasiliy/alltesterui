import React, { Component } from 'react';
import axios from 'axios';

class UserDetails extends Component {
    state = {
        persons: [],
    }

    componentDidMount = () => {
        // console.log(process.env.REACT_APP_APIURL);
        axios.get(`${process.env.REACT_APP_APIURL}/users/1`)
            .then((res) => {
                const persons = res.data;
                this.setState({ persons });
            });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.persons.name != null ? 'user fullname: ' : null } { this.state.persons.name }
                </ul>
            </div>
        );
    }
}

export default UserDetails;
