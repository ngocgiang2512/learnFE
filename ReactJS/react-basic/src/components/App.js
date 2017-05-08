import React from 'react'
import TableRow from './TableRow'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sortIndex: 0,
      data: [
        {
          name: 'Singapore',
          area: 791,
          population: 5607300
        },
        {
          name: 'Vietnam',
          area: 332698,
          population: 92700000
        },
        {
          name: 'United States of America',
          area: 9833520,
          population: 324908000
        },
        {
          name: 'China',
          area: 9596961,
          population: 1373541278
        },
        {
          name: 'Malaysia',
          area: 330803,
          population: 31481000
        },
        { 
          name: 'Japan',
          area: 377972,
          population: 126760000
        },
        {
          name: 'Australia',
          area: 7692024,
          population: 24439400
        },
        {
          name: 'Germany',
          area: 357168,
          population: 82175100
        },
        {
          name: 'Thailand',
          area: 513120,
          population: 67959000
        },
        {
          name: 'Israel',
          area: 22072,
          population: 8683880
        }
      ]
    }
  }

  handleClickTitle(index) {
    this.setState({sortIndex: index})
  }

  sortByColumn(a, colIndex) {
    a.sort(sortFunction);

    function sortFunction(a, b) {
      if (a[colIndex] === b[colIndex]) {
        return 0;
      }
      else {
        return (a[colIndex] < b[colIndex]) ? -1 : 1;
      }
    }

    return a;
  }

  render() {
    let sortIndex = this.state.sortIndex
    let data = this.state.data
    let newData = []

    data.map((item,index) => {
      newData[index] = (Object.values(item))
    })

    newData = this.sortByColumn(newData, sortIndex)

    return (
      <div className="app-wrapper">
        <table className="countryTable">
          <thead>
            <tr>
              <th onClick={this.handleClickTitle.bind(this, 0)}>Country Name</th>
              <th onClick={this.handleClickTitle.bind(this, 1)}>Area (km&sup2;)</th>
              <th onClick={this.handleClickTitle.bind(this, 2)}>Population</th>
            </tr>
          </thead>
          <tbody>
            {newData.map((rowData, index) => <TableRow key={index} rowData={rowData}/>)}
          </tbody>
        </table>
      </div>       
    )
  }
}