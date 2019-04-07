import React, { Component, Fragment } from "react";
import "./App.css";

import Publisher from './Publisher'

class App extends Component {
    renderGpsLocations() {
    const {latitude, longitude} = this.props
    return <span>{`${latitude}, ${longitude}`}</span>;
  }

  render() {
    return (
      <Fragment>
        <header className="App-header">
            <Fragment>Twoja pozycja to: {this.renderGpsLocations()} Najbliższe miasto to: {this.props.topic}</Fragment>
            <Publisher topic={this.props.topic} mqtt={this.props.mqtt}></Publisher>
        </header>
      </Fragment>
    );
  }
}

export default App;

