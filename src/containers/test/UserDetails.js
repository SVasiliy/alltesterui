import React, { Component } from 'react';
import axios from 'axios';

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { person: [] };
    }

    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_APIURL}/users/${this.props.userId}`)
            .then((res) => {
                const person = res.data;
                this.setState({ person });
            });
    }

    render() {
        return (
            <div>
                {this.state.person.name != null ?

                    <div>
                        <ul>
                            {this.state.person.name != null ? 'Name: ' : null } { this.state.person.name }
                        </ul>
                        <ul>
                            {this.state.person.address != null ?
                                <div>
                                Address:
                                    <ul>{this.state.person.address.street}</ul>
                                    <ul>{this.state.person.address.suite}</ul>
                                    <ul>{this.state.person.address.city}</ul>
                                    <ul>{this.state.person.address.zipcode}</ul>
                                </div>
                            : null
                            }
                        </ul>
                    </div>

                : null }

            </div>
        );
    }
}

export default UserDetails;
