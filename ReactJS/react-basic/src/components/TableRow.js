import React from 'react'

export default class TableRow extends React.Component {
  formatNumber(value) {
    if (value && !isNaN(value)) {
      let parts = value.toString().split(".")
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      return parts.join(".")
    }
    return value
  }

  render() {
    let data = this.props.rowData    
    return (
      <tr>
        <td>{data[0]}</td>
        <td className="text-right">{this.formatNumber(data[1])}</td>
        <td className="text-right">{this.formatNumber(data[2])}</td>
      </tr>
    )
  }
}