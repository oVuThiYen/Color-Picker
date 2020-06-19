import React, { Component } from 'react'

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: false
    }
  }
  onCloseForm = () => {
    this.props.onCloseForm()
  }

  onChange = (e) => {
    var target= e.target
    var name = target.name
    var value = target.value
    if(name === 'status') {
      value = target.value === 'true' ? true : false
    }
    this.setState({
      [name]: value
    })
  }

  onHandleSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
      name: '',
      status: false
    })
  }

  render() {
    return (
      <div className="card">
        <div className="card-header bg-primary">
          <h3 className="card-title text-white">Add Workflow</h3>
          <span className="text-right text--danger" onClick={this.onCloseForm}>close</span>
        </div>
        <div className="card-body">
        <form onSubmit={this.onHandleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.onChange} />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select
              className="form-control"
              name="status"
              value={this.state.status} onChange={this.onChange}
            >
              <option value={true}>Active</option>
              <option value={false}>Hide</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mr-2">Save</button>
          <button type="button" className="btn btn-danger" onClick={this.onClear}>Cancel</button>
        </form>
        </div>
      </div>
    )
  }
}

export default TaskForm
