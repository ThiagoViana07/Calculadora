import React from 'react'
import './style.css'

export default class Input extends React.Component {
  render() {
    return (
      <div className='clear-btn' onClick ={() => this.props.handleClear()}>
        {this.props.text}
      </div>       
    )
  }
}