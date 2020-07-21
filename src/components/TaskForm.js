import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../actions/index'

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: false,
      id: ''
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
    this.props.onSaveTask(this.state)
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
      name: '',
      status: false
    })
  }

  componentWillMount() {
    if(this.props.itemEditting) {
      this.setState({
        id: this.props.itemEditting.id,
        status: this.props.itemEditting.status,
        name: this.props.itemEditting.name,
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.itemEditting) {
      this.setState({
        id: nextProps.itemEditting.id,
        status: nextProps.itemEditting.status,
        name: nextProps.itemEditting.name
      })
    } else if(!nextProps.task) {
      this.setState( {
        name: '',
        status: false,
        id: ''
      })
    }
  }
  

  render() {
    var { id } = this.props.onEditTask
    if(!this.props.isDisplayForm) return null
    return (
      <div className="card">
        <div className="card-header bg-primary">
          <h3 className="card-title text-white">
            { id !== '' ? 'Edit Workflow' : 'Add Workflow'}
          </h3>
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
          <button type="submit" className="btn btn-primary mr-2" onClick={this.onHandleSubmit}>Save</button>
          <button type="button" className="btn btn-danger" onClick={this.onClear}>Cancel</button>
        </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditting: state.itemEditting
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: (task) => {
      dispatch(actions.onSaveTask(task));
    },
    onCloseForm: () => {
      dispatch(actions.closeForm())
    },
    onEditTask: (task) => {
      dispatch(actions.editTask(task));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)
