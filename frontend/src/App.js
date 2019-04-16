import React, { Component, Fragment } from "react";
import "./App.scss";
//import Publisher from './Publisher'
import Header from "./Components/Header/Header";
import MessageList from "./Components/MessageList/MessageList";
import FloatingActionButtons from "./Components/FloatingActionButtons/FloatingActionButtons";
import FullScreenDialog from "./Components/FullScreenDialog/FullScreenDialog";
import Message from "./Components/Message/Message";

class App extends Component {
  state = {
    isModalDialogOpened: false
  };

  renderGpsLocations() {
    const { latitude, longitude } = this.props;
    return <span>{`${latitude}, ${longitude}`}</span>;
  }

  render() {
    return (
      <Fragment>
        <Header />
        <main className="app-content">
          <MessageList />
          <FloatingActionButtons
            onClick={() => this.setState({ isModalDialogOpened: true })}
          />
          <FullScreenDialog
            open={this.state.isModalDialogOpened}
            onClose={() => this.setState({ isModalDialogOpened: false })}
          /> 
          {/* <body className="App-body">
              <Fragment>Twoja pozycja to: {this.renderGpsLocations()} Najbliższe miasto to: {this.props.topic}</Fragment>
              <Publisher topic={this.props.topic} mqtt={this.props.mqtt}></Publisher>
          </body> */}
        {/* <Message/> */}
        </main>
      </Fragment>
    );
  }
}

export default App;
