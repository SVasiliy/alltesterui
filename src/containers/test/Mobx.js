
import React, { Component } from 'react';
import Devtools from 'mobx-react-devtools';
import { Button, ButtonGroup } from 'react-bootstrap';
import { observer, inject } from 'mobx-react';

const Mobx = inject('mobxstate')(observer(class Mobx extends Component {

    handleInc = () => { this.props.mobxstate.increment(); }
    handleDec = () => { this.props.mobxstate.decrement(); }

    render() {
        return (
            <div>
                <Devtools />
                Counter: {this.props.mobxstate.counter} <br />
                <button onClick={this.handleInc}> + </button>
                <button onClick={this.handleDec}> - </button>
                <br /><br /><br />
                <ButtonGroup>
                    <Button>Celcius</Button>
                    <Button>Fahrenheit</Button>
                </ButtonGroup>
            </div>
        );
    }

}));

export default Mobx;
