import ReactDOM from 'react-dom';

ReactDOM.render((
  <div>Reactjs</div>
), document.getElementById('app'));

/* ------------------------------------------ */

import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render((
  <App/>
), document.getElementById('app'));

/* ------------------------------------------ */

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Reactjs</p>
      </div>
    )
  }
}

export default App