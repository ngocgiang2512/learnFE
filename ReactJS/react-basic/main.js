import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App.jsx'
import SilentLetter from './components/SilentLetter'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/silentLetter" component={SilentLetter}/>
  </Router>
), document.getElementById('app'))