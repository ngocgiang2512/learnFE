import React from 'react'

var Component1 = React.createClass({
  getInitialState: function() {
    return {
      value: 0
    }
  },

  handleOnClick: function() {
    this.setState({value: this.state.value + 1})
  },

  render: function() {
    return (
      <div>
        <p>React.createClass</p>
        <p>Value: {this.state.value}</p>
        <button type="button" onClick={this.handleOnClick}>Increment</button>
      </div>
    );
  }
})

export default Component1