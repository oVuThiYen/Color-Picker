import React, { Component } from 'react'
import './App.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: '',
      txtPassword: '',
      textDes: '',
      sltGender: 0,
      rdLang: 'vi',
      status: true
    }
  }

  onHandleChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    })
  }

  onHandleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="col-8">
          <div className="card">
            <div className="card-header bg-primary">
              <h3 className="card-title">Form</h3>
            </div>
            <div className="card-body">
            <form onSubmit={this.onHandleSubmit}>
              <div className="form-group">
                <label>username</label>
                <input type="text" className="form-control" onChange={this.onHandleChange} name="txtName" value={this.state.txtName} />
              </div>
              <div className="form-group">
                <label>password</label>
                <input type="text" className="form-control" onChange={this.onHandleChange} name="txtPassword" value={this.state.txtPassword} />
              </div>
              <div className="form-group">
                <label>Example textarea</label>
                <textarea className="form-control" name="textDes" onChange={this.onHandleChange} value={this.state.textDes} />
              </div>
              <div className="form-group">
                <label>Example multiple select</label>
                <select
                  className="form-control"
                  name="sltGender"
                  value={this.state.sltGender}
                  onChange={this.onHandleChange}
                >
                  <option value={0}>Nữ</option>
                  <option value={1}>Nam</option>
                </select>
              </div>
              <p>Language</p>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="rdLang" value="vi" onChange={ this.onHandleChange } checked={ this.state.rdLang === "vi" } />
                <label className="form-check-label">
                  viet nam
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="rdLang" value="en" onChange={this.onHandleChange} checked={ this.state.rdLang === "en" } />
                <label className="form-check-label">
                  english
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" name="status" value={true} onChange={this.onHandleChange} checked={this.state.status === true} />
                <label className="form-check-label">
                  Status
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
