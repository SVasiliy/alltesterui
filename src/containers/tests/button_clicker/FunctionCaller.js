import React from 'react';
import { printSomething } from './utils';

const FunctionCaller = () => (<button
    onClick={printSomething}
    className="button">print log message</button>);

export default FunctionCaller;
