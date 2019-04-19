import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Message from "../Message/Message";
import App from "../../App";
import { setMqtt, setTopic } from "../../providers/mqtt.provider"


const AppRouter = ({ latitude, longitude, topic, mqtt }) => {
  setMqtt(mqtt);
  setTopic(topic);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={ () => <App latitude={latitude} longitude={longitude} /> } />
        <Route path="/message" component={Message} />
      </Switch>
    </BrowserRouter>
  )
}
export default AppRouter;