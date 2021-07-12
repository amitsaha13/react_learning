import React from 'react';
//Normal JS function
/*
function Greet()
{
    return <h3>Hello Amit !</h3>
}
*/

//ES6 Syntax function
const Greet = props => {
    console.log(props)
    return(
        <div>
            <h3>{props.name}</h3>
            <h4>{props.fathersName}</h4>
        </div>
    )
}


export default Greet;