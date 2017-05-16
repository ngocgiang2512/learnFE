import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hello World!!!</p>
        <ul role="nav">
          <li><Link to="/component/01">Component 1</Link></li>
          <li><Link to="/component/02">Component 2</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App;