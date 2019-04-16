import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Message from "../Message/Message";
import App from "../../App";


const AppRouter = (latitude, longitude, nearestCity) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={ () => <App latitude={latitude} longitude={longitude} topic={nearestCity} /> } />
        <Route path="/message" component={Message} />
      </Switch>
    </BrowserRouter>
  )
}
export default AppRouter;