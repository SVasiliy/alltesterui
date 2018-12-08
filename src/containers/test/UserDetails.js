import React, { Component } from 'react';
import axios from 'axios';

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { persons: [] };
    }

    componentDidMount = () => {
        // console.log(this.props.userId);
        axios.get(`${process.env.REACT_APP_APIURL}/users/${this.props.userId}`)
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
