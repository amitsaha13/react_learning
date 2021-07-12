import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        };
    };

    incrementFunction() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Callback Value', this.state.count)
        // }
        // )
        this.setState(prevState => (
            {
                count: prevState.count + 1
            }))
        console.log(this.state.count);
    }
    decrementFunction() {
        this.setState({
            count: this.state.count - 1
        })

    }
    incrementFive() {
        this.incrementFunction()
        this.incrementFunction()
        this.incrementFunction()
        this.incrementFunction()
        this.incrementFunction()
    }

    render() {
        return (
            <div>
                count - {this.state.count}
                <br></br>
                <button onClick={() => this.incrementFunction()}>Increase count</button>
                <br></br>
                <button onClick={() => this.decrementFunction()}>Decrease count</button>
            </div>
        );
    }
}

export default Counter;