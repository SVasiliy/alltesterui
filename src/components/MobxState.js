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
}
decorate(MobxState, {
    counter: observable,
    computedCounter: computed,
    increment: action,
    decrement: action,
});
