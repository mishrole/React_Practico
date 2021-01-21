import React from 'react';

/* ** Importante:

https://stackoverflow.com/questions/41085189/using-underscore-variable-with-arrow-functions-in-es6-typescript
Quote:
"The () syntax conveys the intent better imho and is also more type specific"

    Not exactly. () says that the function does not expect any arguments,
    it doesn't declare any parameters. The function's .length is 0.

    If you use _, it explicitly states that the function will be
    passed one argument, but that you don't care about it.
    The function's .length will be 1, which might matter in some frameworks.

    So from a type perspective, it might be more accurate thing to do
    (especially when you don't type it with any but, say, _: Event).
    And as you said, it's one character less to type which is also
    easier to reach on some keyboards.

*/

// El estado es un objeto al que podemos definir variables
// Podremos acceder en el componente cuando se inicializa
class Button extends React.Component {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render() {
        const { count } = this.state;
        return(
            <div>
                <h1>Manzanas: { count } </h1>
                <button type="button" onClick={this.handleClick}>Agregar</button>
            </div>
        )
    }
}

// Stateless
// const Button = props => {
//     // Destructuring
//     const { text } = props;
//     return(
//         <div>
//             <button type="button">{props.text}</button>
//             <button type="button">{ text }</button>
//         </div>
//     )

// }

export default Button;

