import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Nav from './components/layout/Nav'
import Admin from './components/pages/Admin'
import Confirmation from './components/pages/Confirmation'
import Signup from './components/pages/Signup'

import './App.css'

class App extends Component {

  render () {
    return (
      <Router>
        <Provider store={ store }>
          <div className="App container">
            <Nav/>
            <main className="container">
              <Route path="/" exact={true} component={Signup} />
              <Route path="/admin" exact={true} component={Admin} />
              <Route path="/signup" exact={true} component={Signup} />
              <Route path="/confirm" exact={true} component={Confirmation} />
            </main>
          </div>
        </Provider>
      </Router>

    )
  }
}

export default App
