import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeletters = event => {
    const {value} = event.target
    this.setstate({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phrase-text">
                Enter your phrase
              </label>
              <input
                type="text"
                className="letters-input"
                id="phrase-text"
                onChange={this.onChangeletters}
                placeholder="Enter the phrase"
                value={inputPhrase}
              />
            </div>
            <div>
              <p className="letters-count">
                No.of letters:{inputPhrase.length}
              </p>
            </div>
            <img
              alt="letters calculator"
              className="letters-calculator-image"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
