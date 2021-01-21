import React from 'react';

// Stateless

const Button = props => {
    // Destructuring
    const { text } = props;
    return(
        <div>
            <button type="button">{props.text}</button>
            <button type="button">{ text }</button>
        </div>
    )

}

export default Button;

