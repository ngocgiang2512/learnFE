import React from 'react'

class Component3 extends React.Component {
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

  componentWillMount() {
    console.log('component will mount')
  }

  componentDidMount() {
    console.log('component did mount')
  }

  shouldComponentUpdate() {
    console.log('should component update')
    return true
  }

  componentWillUpdate() {
    console.log('component will update')
  }

  componentDidUpdate() {
    console.log('component did update')
  }

  componentWillUnMount() {
    console.log('component will unmount')
  }

  render() {
    console.log('component rendered')
    return (
      <div>
        <p>Component Life Cycle</p>
        <p>Value: {this.state.value}</p>
        <button type="button" onClick={this.updateState}>Increment</button>
      </div>
    )
  }
}

export default Component3