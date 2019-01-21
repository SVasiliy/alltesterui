import { observable, computed, decorate, action } from 'mobx';

export default class MobxState {
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
    token = null;
    userHasAuthenticated = (authenticated) => {
        this.isAuthenticated = authenticated;
    }
    saveToken = (val) => {
        this.token = val;
        localStorage.setItem('token', JSON.stringify(val));
    }
    logout = () => {
        this.isAuthenticated = false;
    }

    apiPremium = null;
    saveApiPremium = (val) => {
        this.apiPremium = val;
    }

}
decorate(MobxState, {
    counter: observable,
    computedCounter: computed,
    increment: action,
    decrement: action,
    isAuthenticated: observable,
    token: observable,
    userHasAuthenticated: action,
    saveToken: action,
    logout: action,
    apiPremium: observable,
});
