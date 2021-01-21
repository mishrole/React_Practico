import React, { Component } from 'react';

// Maneja ciclo de vida, eventos y estado
class Stateful extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hello: 'Hola Mundo'
        }
    }

    render() {
        return(
            <h1>{this.state.hello}</h1>
        )
    }
};

export default Stateful;
