import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../actions/index'

class TaskItem extends Component {

  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id)
  }

  onDelete = () => {
    this.props.onDeleteTask(this.props.task.id)
    this.props.onCloseForm()
  }

  onUpdate = () => {
    this.props.onEditTask(this.props.task)
    this.props.onOpenForm()
  }

  render() {
    var {task} = this.props
    var {index} = this.props
    return (
      <tr>
        <td>{index + 1}</td>
        <td>
          {task.name}
        </td>
        <td>
          <span
            className={ task.status === true ? 'label text-success' : 'label text-danger' }
            onClick={this.onUpdateStatus}
          >
            { task.status === true ? 'Active' : 'Hide' }</span>
        </td>
        <td>
          <button type="button" className="btn btn-primary mr-2" onClick={this.onUpdate}>Edit</button>
          <button type="button" className="btn btn-danger" onClick={ this.onDelete }>Delete</button>
        </td>
      </tr>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    itemEditting: state.itemEditting
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id));
    },
    onDeleteTask: (id) => {
      dispatch(actions.deleteTask(id));
    },
    onEditTask: (task) => {
      dispatch(actions.editTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm())
    },
    onCloseForm: () => {
      dispatch(actions.closeForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem)
