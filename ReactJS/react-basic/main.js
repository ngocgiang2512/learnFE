import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App.jsx'
import SilentLetter from './components/SilentLetter'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Props from './components/Props'
import Form from './components/Form'
import Component0 from './components/Component0'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/component/01" component={Component1}/>
      <Route path="/component/02" component={Component2}/>
      <Route path="/props" component={Props}/>
      <Route path="/form" component={Form}/>
      <Route path="/componentLifeCycle" component={Component0}/>
      <Route path="/silentLetter" component={SilentLetter}/>
    </Route>
  </Router>
), document.getElementById('app'))