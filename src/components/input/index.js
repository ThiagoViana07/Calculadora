import React from 'react'
import './style.css'

export default class Input extends React.Component {
  render() {
    return (
      <div className='input'>
        {this.props.text}
      </div>       
    )
  }
}