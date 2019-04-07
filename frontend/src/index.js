import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import _App from "./App";
import { Connector, subscribe } from "mqtt-react";
import { getNearestCity } from "./api.service";
import { getGps } from "./gps.provider";

(function init() {
  getGps().then(({ coords }) => {
    const { latitude, longitude } = coords;
    getNearestCity(longitude, latitude).then(({ nearestCity }) => {
      const App = subscribe({ topic: nearestCity })(_App);
      ReactDOM.render(
        <Connector mqttProps="mqtt://192.168.0.242:1884">
          <App latitude={latitude} longitude={longitude} topic={nearestCity}/>
        </Connector>,
        document.getElementById("root")
      );
    });
  });
})();