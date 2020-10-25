import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import List from '../';
import Details from '../Details.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <List {...routerProps} />}
            />
            <Route
              path="/Details/characterId"
              exact
              render={(routerProps) => <Details {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
