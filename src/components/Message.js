import React, { Component, component } from 'react';
class Message extends Component {

    constructor() {
        super()
        this.state = {
            sms: 'hi amit you are in 4/2'
        }
    }

    changeSms() {
        this.setState({
            sms: 'hi amit you completer your 4/2 semester'
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.sms}</h3>
                <button onClick={() => this.changeSms()}>Subscribe</button>

            </div>
        )

    }
}
export default Message;