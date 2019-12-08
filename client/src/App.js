import React, { Component } from 'react'
import { Provider } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import store from './store'
import Users from './components/User/users'
import Userform from './components/Userform/userform'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <div className="App">
          <header className="App-header">
            <img src={ logo } className="App-logo" alt="logo"/>
            <h1 className="App-title">Seer.LA User Sign-up</h1>
          </header>
          <Userform/>
          <Users/>
        </div>
      </Provider>
    )
  }
}

export default App
