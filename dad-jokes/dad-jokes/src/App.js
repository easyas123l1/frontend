import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import Login from "./components/Login";
import Jokes from "./components/Jokes";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <PrivateRoute path="/jokes">
          <Jokes />
        </PrivateRoute>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route component={Register} />
      </Switch>
    </>
  );
}

export default App;
