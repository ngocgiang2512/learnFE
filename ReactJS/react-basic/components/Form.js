import React from 'react'
import info from '../data/personalInfo'

let years = []
let months = []
let now = new Date()
let year = now.getFullYear()

for (let i = year; i > year - 100; i--){
  years.push(i)
}

for (let i = 1; i < 13; i++) {
  months.push(i)
}

class ReactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: info
    }
    this.changeTextInput = this.changeTextInput.bind(this)
    this.changeRadioInput = this.changeRadioInput.bind(this)
    this.changeSelectInput = this.changeSelectInput.bind(this)
    this.printInfo = this.printInfo.bind(this)
  }

  changeTextInput(e) {
    let info = this.state.data
    info[e.target.name] = e.target.value
    this.setState({data: info})
  }

  changeRadioInput(e) {
    let info = this.state.data
    if(e.target.checked){
      info[e.target.name] = e.target.value
      this.setState({data: info})
    }
  }

  changeSelectInput(e) {
    let info = this.state.data
    info[e.target.name] = e.target.value
    this.setState({data: info})
  }

  getDaysInMonth() {
    let data = this.state.data
    let year = data.year
    let month = data.month
    let maxDayInMonth = null
    let days = []

    let thirtyDaysMonths = [4, 6, 9, 11]

    if (year === '' || month === '') {
      maxDayInMonth = 31
    } else if (month === '2' && year % 4 !== 0) {
      maxDayInMonth = 28
    } else if (month === '2' && year % 4 == 0) {
      maxDayInMonth = 29
    } else if (thirtyDaysMonths.indexOf(parseInt(month)) > -1) {
      maxDayInMonth = 30
    } else {
      maxDayInMonth = 31
    }

    for (let i = 1; i <= maxDayInMonth; i++) {
      days.push(i)
    }

    return days
  }

  printInfo() {
    let data = this.state.data
    console.log(data)
  }

  render() {
    let data = this.state.data
    let days = this.getDaysInMonth()

    return (
      <div>
        <p>React Form</p>
        <div className="form-wrapper">
          <div className="row clearfix">
            <p className="label">Name</p>
            <input type="text" name="lastName" placeholder="Last Name" value={data.lastName} onChange={this.changeTextInput}/>
            <input type="text" name="middleName" placeholder="Middle Name" value={data.middleName} onChange={this.changeTextInput}/>
            <input type="text" name="firstName" placeholder="First Name" value={data.firstName} onChange={this.changeTextInput}/>
          </div>
          <div className="row clearfix">
            <p className="label">Gender</p>
            <input type="radio" name="sex" value="male" checked={data.sex ==="male"} onChange={this.changeRadioInput}/>
            Male
            <input type="radio" name="sex" value="female" checked={data.sex ==="female"} onChange={this.changeRadioInput}/>
            Female
          </div>
          <div className="row clearfix">
            <p className="label">Birthday</p>
            Day
            <select type="select" name="day" value={data.day} onChange={this.changeSelectInput}>
              <option value="">--</option>
              {days.map((day, index) => <option key={index} value={day}>{day}</option>)}
            </select>
            Month
            <select type="select" name="month" value={data.month} onChange={this.changeSelectInput}>
              <option value="">--</option>
              {months.map((month, index) => <option key={index} value={month}>{month}</option>)}
            </select>
            Year
            <select type="select" name="year" value={data.year} onChange={this.changeSelectInput}>
              <option value="">--</option>
              {years.map((year, index) => <option key={index} value={year}>{year}</option>)}
            </select>
          </div>
          <div className="row clearfix">
            <p className="label">Description</p>
            <textarea type="text" name="description" value={data.description} onChange={this.changeTextInput}></textarea>
          </div>
        </div>
        <button type="button" onClick={this.printInfo}>Print Information</button>
      </div>
    )
  }
}

export default ReactForm