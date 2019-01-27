import { observable, computed, decorate, action } from 'mobx';
import { decodeJWT } from './utils';

export default class MobxState {

    // counter
    counter = 0;
    get computedCounter() {
        return this.counter + (this.counter * 2);
    }
    increment() {
        this.counter = this.counter + 1;
    }
    decrement() {
        this.counter = this.counter - 1;
    }

    // login
    isAuthenticated = null;
    kcToken = null;
    get accessTokenJSON() {
        return this.kcToken === null ? null : decodeJWT(this.kcToken.access_token);
    }
    userHasAuthenticated = (authenticated) => {
        this.isAuthenticated = authenticated;
    }
    saveKcToken = (val) => {
        this.kcToken = val;
        localStorage.setItem('kcToken', JSON.stringify(val));
    }
    logout = () => {
        this.isAuthenticated = false;
        this.kcToken = null;
        this.apiPremium = null;
        this.apiResourceA = null;
    }

    // access token toggle
    accessTokenToggleFlg = false;
    toggleAccessTokenToggleFlg = () => {
        this.accessTokenToggleFlg = !this.accessTokenToggleFlg;
    }

    // response from /api/premium
    apiPremium = null;
    saveApiPremium = (val) => {
        this.apiPremium = val;
    }

    // response from /api/resourcea
    apiResourceA = null;
    saveApiResourceA = (val) => {
        this.apiResourceA = val;
    }

}
decorate(MobxState, {
    counter: observable,
    computedCounter: computed,
    increment: action,
    decrement: action,
    isAuthenticated: observable,
    kcToken: observable,
    accessTokenJSON: computed,
    userHasAuthenticated: action,
    saveKcToken: action,
    logout: action,
    accessTokenToggleFlg: observable,
    apiPremium: observable,
    apiResourceA: observable,
});
