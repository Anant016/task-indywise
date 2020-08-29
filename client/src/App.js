// @flow

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Profiles from "./components/Profiles";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Profiles} />
          <Route exact path="/profile/:id" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
