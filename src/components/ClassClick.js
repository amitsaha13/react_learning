import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler() {
        console.log('button clicked from classClick !');
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class click</button>
            </div>
        )
    }
}

export default ClassClick
