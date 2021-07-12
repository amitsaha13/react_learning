import React from 'react';

const Hello = () => {
    //return(
        //<div><h3>This is from Hello component</h3></div>
    //)

    return React.createElement(
        'div',
        {id:'helloId', className:'helloClass'},
        React.createElement('h2',null, 'Hello div'));
}
export default Hello;