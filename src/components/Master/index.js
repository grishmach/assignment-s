import {useState} from 'react'

import './index.css'

const Master = () => {
  const [valueOne, changeValueOne] = useState('')
  const [operatorValue, changeOperator] = useState('')
  const [valueTwo, changeValueTwo] = useState('')

  const changingValueOne = event => {
    changeValueOne(event.target.value)
  }

  const changingValueTwo = event => {
    changeValueTwo(event.target.value)
  }

  const changingOperator = event => {
    changeOperator(event.target.value)
  }

  const studentAnswer = () => {
    let studentAnsweredValue
    if (operatorValue === '+' && valueOne.length >= 1 && valueTwo.length >= 1) {
      studentAnsweredValue = parseInt(valueOne) + parseInt(valueTwo)
    } else if (
      operatorValue === '-' &&
      valueOne.length >= 1 &&
      valueTwo.length >= 1
    ) {
      studentAnsweredValue = parseInt(valueOne) - parseInt(valueTwo)
    } else if (
      operatorValue === '*' &&
      valueOne.length >= 1 &&
      valueTwo.length >= 1
    ) {
      studentAnsweredValue = parseInt(valueOne) * parseInt(valueTwo)
    } else if (
      operatorValue === '/' &&
      valueOne.length >= 1 &&
      valueTwo.length >= 1
    ) {
      studentAnsweredValue = Math.trunc(parseInt(valueOne) / parseInt(valueTwo))
    }

    return <h1 className="student-answer">{studentAnsweredValue}</h1>
  }

  return (
    <>
      <div className="app-container">
        <h1 className="app-heading">YOU TELL, I DO</h1>
        <h1 className="master-heading">Master</h1>
        <form className="master-form-container">
          <div className="value-one-container">
            <h1 className="value-one-heading">Value One</h1>
            <input
              type="text"
              className="value-one"
              onChange={changingValueOne}
              value={valueOne}
            />
          </div>
          <div className="value-one-container">
            <h1 className="value-one-heading">Operator</h1>
            <input
              type="text"
              className="value-one"
              onChange={changingOperator}
              value={operatorValue}
            />
          </div>
          <div className="value-one-container">
            <h1 className="value-one-heading">Value Two</h1>
            <input
              type="text"
              className="value-one"
              onChange={changingValueTwo}
              value={valueTwo}
            />
          </div>
        </form>
        <h1 className="master-heading">Student</h1>
        <div className="student-container">{studentAnswer()}</div>
      </div>
    </>
  )
}

export default Master
