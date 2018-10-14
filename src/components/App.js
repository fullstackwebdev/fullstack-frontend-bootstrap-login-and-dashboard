import React, { Component, Fragment } from 'react';
import Login from './Login.js';
import Dashboard from './Dashboard.js';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      // <div>
      // <Login />
      // </div>
      // <h1> hello world </h1>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
      // <Router>
      //   <Route exact path="/" component={Login} />
      // </Router>
    );
  }
}

export default App;
