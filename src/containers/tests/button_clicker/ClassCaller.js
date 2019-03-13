import React, { Component } from 'react';
import { ReactDeveloper } from './utils';

class ClassCaller extends Component {

    state = {
        jobDescription: null,
    };

    setJobDescription = () => {
        const dev = new ReactDeveloper();
        this.setState({ jobDescription: dev.getJob() });
    }

    render() {
        return (<div>
            <button
                onClick={this.setJobDescription}
                className="button">call class function
            </button>
            <br />
            <p>job description: {this.state.jobDescription} </p>
        </div>);
    }

}

export default ClassCaller;
