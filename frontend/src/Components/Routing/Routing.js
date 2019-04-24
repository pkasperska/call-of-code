import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Message from "../Message/Message";
import Header from "../Header/Header";
import App from "../../App";
import { setMqtt, setTopic } from "../../providers/mqtt.provider"


const AppRouter = ({ latitude, longitude, topic, mqtt, data }) => {
  setMqtt(mqtt);
  setTopic(topic);

  return (
    <React.Fragment>
    <Header />
    <div className="app-content">
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={ () => <App latitude={latitude} longitude={longitude} data={data}/> } />
        <Route path="/message" component={Message} />
      </Switch>
    </BrowserRouter>
    </div>
    </React.Fragment>
  )
}
export default AppRouter;