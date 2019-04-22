import React, { Component, Fragment } from "react";
import "./App.scss";
import Header from "./Components/Header/Header";
import MessageList from "./Components/MessageList/MessageList";
import FloatingActionButtons from "./Components/FloatingActionButtons/FloatingActionButtons";
import FullScreenDialog from "./Components/FullScreenDialog/FullScreenDialog";

class App extends Component {
  state = {
    isModalDialogOpened: false
  };
  
  render() {
    return (
      <Fragment>
        <Header />
        <main className="app-content">
          <MessageList data={this.props.data}/>
          <FloatingActionButtons
            onClick={() => this.setState({ isModalDialogOpened: true })}
            />
          <FullScreenDialog
            open={this.state.isModalDialogOpened}
            onClose={() => this.setState({ isModalDialogOpened: false })}
            longitude={this.props.longitude}
            latitude={this.props.latitude}
            />
        </main>
      </Fragment>
    );
  }
}

export default App;
