import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Message from "../Message/Message";
import App from "../../App";
import { setMqtt, setTopic } from "../../providers/mqtt.provider"


const AppRouter = ({ latitude, longitude, topic, mqtt, data }) => {
  setMqtt(mqtt);
  setTopic(topic);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={ () => <App latitude={51.93548} longitude={15.50643} data={data}/> } />
        <Route path="/message" component={Message} />
      </Switch>
    </BrowserRouter>
  )
}
export default AppRouter;