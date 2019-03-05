export function printSomething() {
    console.log('test print');
}

export function printSomethingElse() {
    console.log('test print 2');
}

class Developer {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getName() {
        return `${this.firstname} ${this.lastname}`;
    }
  }

export class ReactDeveloper extends Developer {
    getJob() {
        return 'React Developer';
    }
}
