import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class Users extends Component {
    state = {
        persons: [],
    }

    componentDidMount() {
        // console.log(process.env.REACT_APP_APIURL);
        axios.get(`${process.env.REACT_APP_APIURL}/users`)
            .then((res) => {
                const persons = res.data;
                this.setState({ persons });
            });
    }

    render() {
        return (
            <div className="container">
                <Table striped bordered condensed hover>
                    <thead>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        { this.state.persons.map(person =>
                                (<tr className="mytable">
                                    <td>{person.id}</td>
                                    <td>{person.username}</td>
                                    <td>{person.name}</td>
                                    <td>{person.email}</td> </tr>)) }
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Users;
