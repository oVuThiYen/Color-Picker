import React, { Component } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'
import { connect } from 'react-redux'
import * as actions from './actions/index'

class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskEditing: null,
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sortBy: 'name',
      sortValue: 1
    }
  }

  onClear = () => {
    this.setState({
      name: '',
      status: false
    })
  }

  onToggleForm = () => {
    // var id = this.props.itemEditting(this.props.task.id)
    // console.log(id)
    // if(id) {
    //   this.props.onOpenForm(); 
    // } else {
    //   this.props.onToggleForm();
    // }
    this.onClear();
  }

  // onCloseForm = () => {
  //   this.props.onCloseForm();
  // }

  // onSubmit = (data) => {
  //   var {tasks} = this.state
  //   if(data.id ==='') {
  //     data.id = this.generateId();
  //     tasks.push(data)
  //   } else {
  //     var index = this.findIndex(data.id)
  //     tasks[index] = data
  //   }
  //   this.setState({
  //     tasks: tasks,
  //     taskEditing: null
  //   })
  //   localStorage.setItem('tasks', JSON.stringify(tasks));
  // }

  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1
    tasks.forEach((task, index) => {
      if(task.id === id) {
        result = index
      }
    })
    return result
  }

  // onDelete = (id) => {
  //   var { tasks } = this.state;
  //   var index = this.findIndex(id)
  //   if(index !== -1) {
  //     tasks.splice(index, 1)
      
  //     this.setState({
  //       tasks: tasks
  //     })
  //     localStorage.setItem('tasks', JSON.stringify(tasks));
  //   }
  //   // this.onCloseForm();
  // }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }

  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id)
    var taskEditing = tasks[index]
    this.setState({
      taskEditing: taskEditing
    })
    this.onShowForm()
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10)
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    })
  }

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    })
  }

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    })
  }

  render() {
    var { taskEditing, sortBy, sortValue } = this.state
    var { isDisplayForm, onEditTask } = this.props
    // if(filter) {
    //   if(filter.name) {
    //     tasks = tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(filter.name) !== -1
    //     })
    //   }
    //   tasks = tasks.filter((task) => {
    //     if(filter.status === -1) {
    //       return task
    //     }else {
    //       return task.status === (filter.status === 0 ? true : false)
    //     }
    //   })
    // }
    // if(keyword) {
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(keyword) !== -1
    //   })
    // }
    // if(sortBy === 'name') {
    //   tasks.sort((a, b) => {
    //     if(a.name > b.name) return sortValue
    //     else if(a.name < b.name) return -sortValue
    //     else return 0;
    //   })
    // } else {
    //   tasks.sort((a, b) => {
    //     if(a.status > b.status) return -sortValue
    //     else if(a.status < b.status) return sortValue
    //     else return 0;
    //   })
    // }
    
    return (
      <div className="container mt-5">
        <div className="text-center">
          <h1>Workflow Management</h1>
        </div>
        <div className="row mt-5">
          <div className={ isDisplayForm ? 'col-4' : '' }>
            <TaskForm
              taskEditing={taskEditing}
            /> 
          </div>
          <div className={ isDisplayForm ? 'col-8' : 'col-12' }>
            <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>Add</button>
            <Control  onSearch={this.onSearch} onSort={this.onSort}  sortBy={sortBy} sortValue={sortValue}/>
            <div className="row mt-3">
              <div className="col-12">
                <TaskList
                  // onDelete={this.onDelete}
                  onUpdate={this.onUpdate}
                  onFilter={this.onFilter}
                />
              </div>
            </div>
          </div>
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
    onToggleForm : () => {
      dispatch(actions.toggleForm())
    },
    onCloseForm: () => {
      dispatch(actions.closeForm())
    },
    onEditTask: (task) => {
      dispatch(actions.editTask(task));
    },
    onOpenForm: () => {
      dispatch(actions.openForm())
    },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Manage)
