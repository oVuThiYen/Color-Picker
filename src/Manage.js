import React, { Component } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'

class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false
    }
  }

  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }
  }

  s4(){
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateId() {
    return this.s4() + this.s4() + '-' + this.s4();
  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    })
  }

  onSubmit = (data) => {
    var {tasks} = this.state
    data.id = this.generateId();
    tasks.push(data)
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdateStatus = (id) => {
    console.log(id)
    var { tasks } = this.state;
    var index = this.findIndex(id)
    console.log(index)
    console.log(tasks[index])
    if(index !== -1) {
      tasks[index].status = !tasks[index].status
      
      this.setState({
        tasks: tasks
      })
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

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

  render() {
    var { tasks, isDisplayForm } = this.state
    var elmTaskForm = isDisplayForm ? 
      <TaskForm
        onCloseForm={this.onCloseForm}
        onSubmit={this.onSubmit}
      /> : ''
    return (
      <div className="container mt-5">
        <div className="text-center">
          <h1>Workflow Management</h1>
        </div>
        <div className="row mt-5">
          <div className={ isDisplayForm ? 'col-4' : '' }>
            { elmTaskForm }
          </div>
          <div className={ isDisplayForm ? 'col-8' : 'col-12' }>
            <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>Add</button>
            <Control />
            <div className="row mt-3">
              <div className="col-12">
                <TaskList tasks={tasks} onUpdateStatus={this.onUpdateStatus} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Manage
