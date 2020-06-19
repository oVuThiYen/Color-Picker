import React, { Component } from 'react'
import './App.css'
import ColorPicker from './components/ColorPicker'
import SizeSetting from './components/SizeSetting'
import Result from './components/Result'
import Reset from './components/Reset'
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    }
  }

  onSetColor = (params) => {
    this.setState ({
      color: params
    })
    console.log(params)
  }

  onChangeSize = (value) => {
    this.setState({
      fontSize: (this.state.fontSize + value  >=8 && this.state.fontSize + value <=36) ? this.state.fontSize + value : this.state.fontSize
    })
    console.log(value)
  }

  onDefault = (value) => {
    if(value) {
      this.setState({
        color: 'red',
        fontSize: 12
      })
    } 
    console.log(value)
  }

  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="row">
            <ColorPicker color={this.state.color} onColor={ this.onSetColor } />
            <div className="col-6">
              <SizeSetting size={this.state.fontSize} onChangeSize={this.onChangeSize}/>
              <Reset onDefault={this.onDefault}/>
            </div>
            <Result color={this.state.color} size={this.state.fontSize} />
            <div className="col-12">
              <h2 className="mt-5">Link Pages</h2>
              <ul>
                <li>
                  <Link to="/form">Form</Link>
                </li>
                <li>
                  <Link to="/manage">Manage</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
