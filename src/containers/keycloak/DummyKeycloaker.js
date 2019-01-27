import React, { Component } from 'react';
import axios from 'axios';
import { observer, inject } from 'mobx-react';
import PremiumViewer from './PremiumViewer';
import JwtViewer from './JwtViewer';
import './DummyKeycloaker.css';

const DummyKeycloaker = inject('mobxstate')(observer(class DummyKeycloaker extends Component {

    saveApiPremium = (val) => { this.props.mobxstate.saveApiPremium(val); }
    toggleAccessTokenToggleFlg = () => { this.props.mobxstate.toggleAccessTokenToggleFlg(); }

    callPremium = () => {
        if (this.props.mobxstate.kcToken === null) {
            this.props.history.push('/login');
        } else {
            const AuthStr = 'Bearer '.concat(this.props.mobxstate.kcToken.access_token);
            axios.get(`${process.env.REACT_APP_APIURL}/premium`, { headers: { Authorization: AuthStr } })
                .then((response) => {
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
                <div className="inline">
                    <p className="left">access_token: </p>
                    <p className="right">show/hide <input type="checkbox" checked={this.props.mobxstate.accessTokenToggleFlg} onChange={this.toggleAccessTokenToggleFlg} /></p>

                </div>
                <JwtViewer />
                <hr />
                /api/premium &nbsp; <button onClick={this.callPremium}>GET call</button>
                <PremiumViewer />
                <hr />
                <br />
                <hr />
            </div>
        );
    }

}));

export default DummyKeycloaker;
