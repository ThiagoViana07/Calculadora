import React, { Component, useState } from 'react';
import Button from './components/button'
import Input from './components/input'
import ClearButton from './components/clearButton'

import './global.css'

const App = (props) => {
  const [input, setInput] = useState('')
  const [previousNumber, setPreviousNumber] = useState(0)
  const [currentNumber, setCurrentNumber] = useState(0)
  const [operator, setOperator] = useState('')
  // state = {
  //   input: 0,
  //   previousNumber: 0,
  //   currentNumber: "",
  //   operator: ""
  // }
  const addToInput = val => {
    //Adiciona um numero na tela
    if (input.length === 8)
      return setInput(input)
    setInput(input + val)
    // console.log(input)
  }

  const addZeroToInput = val => {
    //Verifica se existe algum numero na tela pra poder inserir o zero
    if (input !== "") {
      setInput(input + val)
    }
  }

  const limitNumberToInout = val => {
    //Limita a entrada do input para 8 numeros
    if (input.length === 8) {
      setInput(input)
    }
  }

  const clearInput = () => {
    //Limpa o input
    setInput('')
    setPreviousNumber('')
    setCurrentNumber('')
    setOperator('')

  }

  const clearC = () => {
    setInput('')
    // setOperator('')
  }

  const add = () => {
    setPreviousNumber(input)
    // console.log(input)

    setInput('')
    setOperator("plus")
    // console.log("entrei no add")

  }
  const divide = () => {
    setPreviousNumber(input)
    setInput('')
    setOperator("divide")

  }
  const subtract = () => {
    setPreviousNumber(input)
    setInput('')
    setOperator("subtract")

  }
  const multiply = () => {
    setPreviousNumber(input)
    setInput('')
    setOperator("multiply")

  }

  const evaluate = () => {
    console.log(input)
    setCurrentNumber(input)
    // console.log(previousNumber)
    console.log(currentNumber)

    if (operator === 'plus') {

      setInput(
        parseInt(previousNumber) +
        parseInt(input)
      )
      if (input.length >= 8){
          setInput('ERR')
          console.log('entrei')
        return 
      }

    } else if (operator === 'subtract') {
      setInput(

        parseInt(previousNumber) -
        parseInt(input)
      )
      if (setInput.length >= 8)
        return setInput('ERR')
    } else if (operator === 'multiply') {
      setInput(

        parseInt(previousNumber) *
        parseInt(input)
      )
      if (setInput.length >= 8)
        return setInput('ERR')

    } else if (operator === 'divide') {
      setInput(
        parseInt(previousNumber) /
        parseInt(input)
      )
      if (setInput.length >= 8)
        return setInput('ERR')
    }


  }

  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
          <Input text={input} ></Input>
        </div>
        <div className="row">
          <Button handleClick={addToInput} text='1' value='1' />
          <Button handleClick={addToInput} text='2' value='2' />
          <Button handleClick={addToInput} text='3' value='3' />
          <Button text='/' handleClick={divide} />
        </div>
        <div className="row">
          <Button handleClick={addToInput} text='4' value='4' />
          <Button handleClick={addToInput} text='5' value='5' />
          <Button handleClick={addToInput} text='6' value='6' />
          <Button handleClick={multiply} text='x' />

        </div>
        <div className="row">
          <Button handleClick={addToInput} text='7' value='7' />
          <Button handleClick={addToInput} text='8' value='8' />
          <Button handleClick={addToInput} text='9' value='9' />
          <Button handleClick={add} text='+' />

        </div>
        <div className="row">
          <Button text='=' handleClick={evaluate} />
          <Button handleClick={addZeroToInput} text='0' />
          <Button text='C' handleClick={clearC} />
          <Button text='-' handleClick={subtract} />
        </div>
        <div className="row">
          <ClearButton handleClear={clearInput} text="AC" >

          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
