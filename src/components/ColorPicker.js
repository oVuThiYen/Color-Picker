import React, { Component } from 'react'

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'blue', 'green', '#ccc']
    }
  }

  showColor(color) {
    return {
      backgroundColor: color
    }
  }
  setActiveColor = (color) => {
    this.props.onColor(color)
  }

  render() {
    var elmColor = this.state.colors.map((color, index) => {
      return <span
              key={ index }
              style={this.showColor(color)}
              className={this.props.color === color? 'active' : '' }
              onClick={() => this.setActiveColor(color)}>
            </span>
    })
    return (
      <div className="col-6">
        <div className="card">
          <div className="card-header bg-primary">
            <h3 className="card-title">Color Picker</h3>
          </div>
          <div className="card-body">
            { elmColor }
          </div>
        </div>
      </div>
    )
  }
}

export default ColorPicker
