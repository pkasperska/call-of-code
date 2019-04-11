import React, { Component, Fragment } from "react";
import "./App.scss";

import Publisher from './Publisher'
import Header from "./Components/Header/Header";
import MessageList from "./Components/MessageList/MessageList";
import NewMessageButton from "./Components/NewMessageButton/NewMessageButton";

class App extends Component {
    renderGpsLocations() {
    const {latitude, longitude} = this.props
    return <span>{`${latitude}, ${longitude}`}</span>;
  }

  render() {
    return (
      <Fragment>

        <Header />
        <MessageList />
        {/* <body className="App-body">
            <Fragment>Twoja pozycja to: {this.renderGpsLocations()} Najbliższe miasto to: {this.props.topic}</Fragment>
            <Publisher topic={this.props.topic} mqtt={this.props.mqtt}></Publisher>
        </body> */}
        <NewMessageButton/>
      </Fragment>
    );
  }
}

export default App;

