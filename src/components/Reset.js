import React, { Component } from 'react'

class Reset extends Component {
  onReset = () => {
    this.props.onDefault(true)
  }
  render() {
    return (
      <button className="btn btn-primary" onClick={this.onReset}>reset</button>
    )
  }
}

export default Reset
