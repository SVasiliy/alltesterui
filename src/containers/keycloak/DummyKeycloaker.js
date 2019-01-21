import React, { Component } from 'react';
import axios from 'axios';
import { observer, inject } from 'mobx-react';
import PremiumViewer from './PremiumViewer';

const DummyKeycloaker = inject('mobxstate')(observer(class DummyKeycloaker extends Component {

    saveApiPremium = (val) => { this.props.mobxstate.saveApiPremium(val); }

    callPremium = () => {
        if (this.props.mobxstate.token === null) {
            this.props.history.push('/login');
        } else {
            const AuthStr = 'Bearer '.concat(this.props.mobxstate.token.access_token);
            axios.get(`${process.env.REACT_APP_APIURL}/premium`, { headers: { Authorization: AuthStr } })
                .then((response) => {
            // If request is good...
                    console.log(response.data);
                    this.saveApiPremium(response.data);
                })
                .catch((error) => {
                    console.log(`error ${error}`);
                });
        }
    }

    render() {
        return (
            <div>
                dummy keycloak tester
                <br />
                <hr />
                <br />
                /api/premium &nbsp; <button onClick={this.callPremium}>GET call</button>
                <br />
                <PremiumViewer />
                <br />
                <hr />
            </div>
        );
    }

}));

export default DummyKeycloaker;
