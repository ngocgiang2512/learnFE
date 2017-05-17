import React from 'react'
import info from '../data/personalInfo'

class ReactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: info
    }
    this.changeName = this.changeName.bind(this)
    this.printName = this.printName.bind(this)
  }

  changeName(e) {
    let info = this.state.data
    info[e.target.name] = e.target.value
    this.setState({data: info})
  }

  printName() {
    let data = this.state.data
    console.log(data.lastName + ' ' + data.middleName + ' ' + data.firstName)
  }

  render() {
    let data = this.state.data
    return (
      <div>
        <p>React Form</p>
        <div className="form-wrapper">
          <div className="row clearfix">
            <p className="label">First Name</p>
            <input type="text" name="firstName" className="value" value={data.firstName} onChange={this.changeName}/>
          </div>
          <div className="row clearfix">
            <p className="label">Middle Name</p>
            <input type="text" name="middleName" className="value" value={data.middleName} onChange={this.changeName}/>
          </div>
          <div className="row clearfix">
            <p className="label">Last Name</p>
            <input type="text" name="lastName" className="value" value={data.lastName} onChange={this.changeName}/>
          </div>
        </div>
        <button type="button" onClick={this.printName}>Print Name</button>
      </div>
    )
  }
}

export default ReactForm