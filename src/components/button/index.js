import React from "react"

import './style.css'

export default class Button extends React.Component {
  //funcao que verifica quais caracteres do teclado da calculadora
  // são uma string para mduar a cor
  isOperator = val =>{
    return !isNaN(val) || val ==='.' || val === "="
  }

  render() {
    return (
      <div className={`button-container ${this.isOperator
        // Adiciona um novo nome "operator" se for true
        (this.props.text) ? "" : "operator"}`}
        onClick={() => this.props.handleClick(this.props.text)}
        >
        {this.props.text}
      </div>
    )
  }
}