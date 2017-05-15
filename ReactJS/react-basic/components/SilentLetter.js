import React from 'react'
import ReactDOM from 'react-dom'
import data from '../data/silentLetter'

class SilentLetter extends React.Component {
  render() {
    return (
      <div>
        <audio controls>
          <source src="../audio/alcohol.mp3" type="audio/mpeg"/>
        </audio>
        {data.map((word, index) => 
          <div key={index}>
            <span>{word.word}:</span>
            <span>{word.pronunciation}</span>
          </div>
        )}
      </div>
    )
  }
}

export default SilentLetter

