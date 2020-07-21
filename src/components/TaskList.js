import React, { Component } from 'react'
import TaskItem from './TaskItem'
import { connect } from 'react-redux';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1
    }
  }
  onChange = (e) => {
    var target = e.target
    var name = target.name
    var value = target.value
    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus,
    )
    this.setState({
      [name] : value
    })
  }

  render() {
    var { tasks } = this.props
    var { filterStatus, filterName } = this.state
    var elmTasks = tasks.map((task, index) => {
      return <TaskItem
          key={index}
          index={index}
          task={task}
          onUpdate={this.props.onUpdate}
        />
    })
    return (
      <table className="table">
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
              <input type="text" className="form-control" name="filterName" value={ filterName } onChange= { this.onChange } />
            </td>
            <td>
              <select
                className="form-control"
                name="filterStatus"
                onChange={this.onChange}
                value={ filterStatus }
              >
                <option value={-1}>All</option>
                <option value={0}>Active</option>
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

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}
export default connect(mapStateToProps, null)(TaskList)
