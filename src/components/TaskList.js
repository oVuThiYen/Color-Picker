import React, { Component } from 'react'
import TaskItem from './TaskItem'
import { connect } from 'react-redux';
import * as actions from './../actions/index'

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
    var filter = {
      name: name === 'filterName' ? value : this.state.filterName,
      status: name === 'filterStatus' ? value : this.state.filterStatus
    }
    this.props.onFilter(filter)
    this.setState({
      [name] : value
    })
  }

  render() {
    var { tasks, filterTable } = this.props
    console.log(tasks)
    if(filterTable.name) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(filterTable.name) !== -1
      })
    }
    tasks = tasks.filter((task) => {
      if(filterTable.status === -1) {
        return task
      } else {
        return task.status === (filterTable.status === 0 ? true : false)
      }
    });
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
              <input type="text" className="form-control" name="filterName" value={ this.state.filterName } onChange= { this.onChange } />
            </td>
            <td>
              <select
                className="form-control"
                name="filterStatus"
                onChange={this.onChange}
                value={ this.state.filterStatus }
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
    tasks: state.tasks,
    filterTable: state.filterTable
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilter: (filter) => {
      dispatch(actions.filterTask(filter));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
