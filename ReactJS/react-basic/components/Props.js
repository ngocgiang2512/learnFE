import React from 'react'
import PropsContent from './PropsContent'

class Props extends React.Component {
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
        <PropsContent value={this.state.value} updateState={this.updateState}/>
      </div>
    )
  }
}

export default Props