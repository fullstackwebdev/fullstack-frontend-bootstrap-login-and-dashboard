import React, { Component } from 'react';
import Login from './Login.js';
import SignUp from './SignUp.js';
import Dashboard from './Dashboard.js';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants.js';

class PrivateRoute extends Component {
  constructor(props) {
    super(props);

    this.isAuthenticated = localStorage.getItem(AUTH_TOKEN) ? true : false;

    //const ...rest = this.props;
  }

  render() {
    if (! this.isAuthenticated ) {
      return (
        <Redirect to='/login'/>
      )
    }
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
