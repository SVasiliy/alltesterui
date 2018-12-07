import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import '../Home.css';

class ReactBootstrapTable2 extends Component {
    state = { temp: false }

    render() {
        const products = [];
        const columns = [{
            dataField: 'id',
            text: 'Product ID',
        }, {
            dataField: 'name',
            text: 'Product Name',
        }, {
            dataField: 'price',
            text: 'Product Price',
        }];

        return (
            <BootstrapTable keyField="id" data={products} columns={columns} />
        );
    }
}

export default ReactBootstrapTable2;
