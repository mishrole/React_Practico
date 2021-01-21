import React from 'react';

// Es Stateless
const HolaMundo = () => {
    const HELLO = '¡Hola Mundo!'
    const IS_TRUE = true;
    return(
        <div className="HolaMundo">
            <h1>{HELLO}</h1>
            <h2>Curso Práctico de React</h2>
            {/* Todas las etiquetas deben estar cerradas */}
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
            {IS_TRUE ? <h4>Esto es verdadero</h4> : <h5>Esto es falso</h5>}
            {IS_TRUE && <h4>Soy verdadero</h4>}
        </div>
    );
};

export default HolaMundo;