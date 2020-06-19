import React, { Component } from 'react'
import TaskItem from './TaskItem'

class TaskList extends Component {
  render() {
    var { tasks } = this.props
    var elmTasks = tasks.map((task, index) => {
      return <TaskItem
          key={index}
          index={index}
          task={task}
          onUpdateStatus={this.props.onUpdateStatus}
        />
    })
    return (
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input type="text" className="form-control" name=""/>
            </td>
            <td>
              <select
                className="form-control"
                name="filterStatus"
              >
                <option value={-1}>All</option>
                <option value={0}>Activet</option>
                <option value={1}>Hide</option>
              </select>
            </td>
            <td>
            </td>
          </tr>
          { elmTasks }
        </tbody>
      </table>
    )
  }
}

export default TaskList
