import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Profiles from "./components/Profiles";
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Profiles} />
      </Router>
    );
  }
}

export default App;
