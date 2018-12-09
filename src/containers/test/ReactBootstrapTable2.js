import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import UserDetails from './UserDetails';

class ReactBootstrapTable2 extends Component {
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
        const columns = [{
            dataField: 'id',
            text: 'ID',
        }, {
            dataField: 'username',
            text: 'Username',
        }, {
            dataField: 'name',
            text: 'Name',
        }, {
            dataField: 'email',
            text: 'Email',
        }];

        const expandRow = {
            renderer: row => (
                <UserDetails userId={row.id} />
            ),
        };

        return (

            <BootstrapTable keyField="id" data={this.state.persons} columns={columns} expandRow={expandRow} />
        );
    }
}

export default ReactBootstrapTable2;
