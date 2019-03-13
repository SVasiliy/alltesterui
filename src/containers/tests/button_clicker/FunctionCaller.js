import React from 'react';
import './ClickerCSS.css';
import { printSomething } from './utils';

const FunctionCaller = () => (<div className="clickDiv">
    <button
        onClick={printSomething}
        className="button">print log message
    </button>
</div>);

export default FunctionCaller;
