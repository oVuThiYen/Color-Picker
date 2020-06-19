
import React, { Component } from 'react'

class Result extends Component {
  setStyle() {
    return {
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.size
    }
  }
  render() {
    return (
      <div className="col-12">
        <p>color: {this.props.color} - fontsize: {this.props.size}</p>
        <div className="content" style={this.setStyle()}>
          Nội dung setting
        </div>
      </div>
    )
  }
}

export default Result
