import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
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
            <div className="container">
                {this.state.person.name != null ?
                    <Table bordered condensed hover>
                        <tbody>
                            <tr className="mytable">
                                <td>Name</td>
                                <td>{this.state.person.name}</td>
                            </tr>
                            <tr className="mytable">
                                <td>Address</td>
                                <td>
                                    {this.state.person.address.street}<br />
                                    {this.state.person.address.suite}<br />
                                    {this.state.person.address.city}<br />
                                    {this.state.person.address.zipcode}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
            : null }
            </div>

        );
    }
}

export default UserDetails;
