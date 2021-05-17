import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SavedPage from "./pages/SavedPage/SavedPage";


class App extends Component {


  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/saved" component={SavedPage} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;