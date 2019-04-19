import React from 'react';

export default class Publisher extends React.Component {

    addMessage = (message) => {
        console.log("test")
        const {mqtt, topic} = this.props;
        mqtt.publish(topic, message)
    }
    render() {
        return (
            <div>
                <button onClick={() => this.addMessage("test")}>Send</button>
            </div>
        );
    }
    
}
