import React from 'react'

class PropsContent extends React.Component {
  render() {
    return (
      <div>
        <p>Value: {this.props.value}</p>
        <button type="button" onClick={this.props.updateState}>Increment</button>
      </div>
    )
  }
}

export default PropsContent