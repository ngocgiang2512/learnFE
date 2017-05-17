import React from 'react'
import { Link, IndexLink } from 'react-router'
import NavLink from './components/NavLink'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <IndexLink to="/" activeClassName="active">ReactJS</IndexLink>
        </div>
        <div className="main-content-wrapper clearfix">
          <div className="sidebar">
            <ul role="nav">
              <li><NavLink to="/component/01">Component 1</NavLink></li>
              <li><NavLink to="/component/02">Component 2</NavLink></li>
              <li><NavLink to="/props">Props</NavLink></li>
              <li><NavLink to="/form">Form</NavLink></li>
              <li><NavLink to="/componentLifeCycle">Component Life Cycle</NavLink></li>
              <li><NavLink to="/silentLetter">Silent Letters</NavLink></li>
            </ul>
          </div>
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default App;