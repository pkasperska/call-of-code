import React from 'react';

export default class Publisher extends React.Component {

    addMessage = (message) => {
        const {mqtt, topic} = this.props;
        mqtt.publish(topic, message)
    }
    render() {
        return (
            <div>
                <button onClick={() => this.addMessage("wiadomość")}>Send</button>
            </div>
        );
    }
    
}
