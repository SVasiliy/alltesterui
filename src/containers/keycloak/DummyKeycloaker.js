import React, { Component } from 'react';
import axios from 'axios';
import { observer, inject } from 'mobx-react';
import PremiumViewer from './PremiumViewer';
import JwtViewer from './JwtViewer';
import { decodeJWT } from '../../components/utils';

const DummyKeycloaker = inject('mobxstate')(observer(class DummyKeycloaker extends Component {

    saveApiPremium = (val) => { this.props.mobxstate.saveApiPremium(val); }
    decodeJWTs = () => { decodeJWT(this.props.mobxstate.token.access_token); }

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
                <b>dummy keycloak tester</b>
                <br />
                <hr />
                /api/premium &nbsp; <button onClick={this.callPremium}>GET call</button>
                <PremiumViewer />
                <hr />
                output test &nbsp; <button onClick={this.decodeJWTs}>click me</button>
                <JwtViewer />
                <br />
                <hr />
            </div>
        );
    }

}));

export default DummyKeycloaker;
