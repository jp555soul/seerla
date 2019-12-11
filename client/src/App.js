import React, { Component } from 'react'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { alertActions } from './_help/alerts'
import { history } from './_help/history'

import Nav from './components/layout/Nav'
import Home from './components/pages/Home'
import Admin from './components/pages/Admin'
import Confirmation from './components/pages/Confirmation'
import Signup from './components/pages/Signup'

import './App.css'

class App extends Component {
  constructor(props) {
        super(props);

        history.listen((location, action) => {
            this.props.clearAlerts();
        });
    }

  render () {
    const { alert } = this.props;
    return (
      <Router history={history}>
        <div className="App container">
          <Nav/>
          <main className="container">
             {alert.message &&
               <div className={`alert ${alert.type}`}>{alert.message}</div>
             }
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/admin" exact={true} component={Admin} />
              <Route path="/signup" exact={true} component={Signup} />
              <Route path="/confirm" exact={true} component={Confirmation} />
              <Redirect from="*" to="/" />
            </Switch>
          </main>
        </div>
      </Router>

    )
  }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

export default connect(mapState, actionCreators)(App);
