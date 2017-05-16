import React from 'react'

class Component2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }

    this.updateState = this.updateState.bind(this)
  }

  updateState() {
    this.setState({value: this.state.value + 1})
  }

  render() {
    return (
      <div>
        <p>ES6</p>
        <p>Value: {this.state.value}</p>
        <button type="button" onClick={this.updateState}>Increment</button>
      </div>
    )
  }
}

export default Component2