import React, { Component } from 'react'

class SizeSetting extends Component {
  changeSize(value) {
    this.props.onChangeSize(value)
  }

  render() {
    return (
      <div className="card">
        <div className="card-header bg-warning">
          <h3 className="card-title">Size: {this.props.size}</h3>
        </div>
        <div className="card-body">
          <button className="btn btn-success mr-2" onClick={() => this.changeSize(+2)}>Tăng</button>
          <button className="btn btn-success" onClick={() => this.changeSize(-2)}>Giảm</button>
        </div>
      </div>  
    )
  }
}

export default SizeSetting
