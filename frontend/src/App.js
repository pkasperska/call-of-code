import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gpsPoints: [],
      data: null
    };
  }

  componentDidMount() {
    this.getGps().then(({ coords }) => {
      const { latitude, longitude } = coords;
      this.setState({ gpsPoints: [longitude, latitude] });
      fetch(`http://localhost:3200/city?longitude=${longitude}&latitude=${latitude}`)
      .then(response => response.json())
      .then(({nearestCity}) => {
        this.setState({data: nearestCity})
      })
    });
  }

  getGps() {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  renderGpsLocations() {
    const [latitude, longitude] = this.state.gpsPoints;
    console.log(this.state);
    return <span>{`${latitude}, ${longitude}`}</span>;
  }

  render() {
    return (
      <Fragment>
        <header className="App-header">
            <Fragment>Twoja pozycja to: {this.renderGpsLocations()} Najbliższe miasto to: {this.state.data}</Fragment>
        </header>
      </Fragment>
    );
  }
}

export default App;
