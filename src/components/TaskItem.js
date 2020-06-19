import React, { Component } from 'react'

class TaskItem extends Component {

  onUpdateStatus = () =>{
    this.props.onUpdateStatus(this.props.task.id)
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
            className={ task.status === true ? 'label label-danger' : 'label label-success' }
            onClick={this.onUpdateStatus}
          >
            { task.status === true ? 'Hide' :'Active' }</span>
        </td>
        <td>
          <button type="button" className="btn btn-primary mr-2">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
}

export default TaskItem
