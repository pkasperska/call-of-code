import React from "react";
import ReactDOM from "react-dom";
import _App from "./App";
import { Connector, subscribe } from "mqtt-react";
import { getGps } from "./gps.provider";
import { getNearestCity } from "./api.service";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import "./index.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#039be5'
       
    },
    secondary: {
      main: '#484543',
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    type: 'dark'
  },
  typography: {
    useNextVariants: true,
  },
});

(function init() {
  getGps().then(({ coords }) => {
    const { latitude, longitude } = coords;
    getNearestCity(longitude, latitude).then(({ nearestCity }) => {
      const App = subscribe({ topic: nearestCity })(_App);
      ReactDOM.render(
        <MuiThemeProvider theme={theme}>
        <Connector mqttProps="mqtt://192.168.0.242:1884">
          <App latitude={latitude} longitude={longitude} topic={nearestCity}/>
        </Connector>
        </MuiThemeProvider>,
        document.getElementById("root")
      );
    })
    .catch(e => {
      ReactDOM.render(<div>Error while conecting to server</div>, 
        document.getElementById("root"))
    });
  });
})();