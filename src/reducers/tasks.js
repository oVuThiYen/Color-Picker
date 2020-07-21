import * as types from './../constants/ActionTypes'

var s4 = () => {
  return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}

var generateId = () => {
  return s4() + s4() + '-' + s4();
}

var data = JSON.parse(localStorage.getItem('tasks'));

var initialState = data ? data: [];

var id = ''

var myReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LIST_ALL:
      return state;
    case types.SAVE_TASK:
        var newTask = {
          id: action.task.id ? action.task.id : generateId(),
          name: action.task.name,
          status: action.task.status
        }
      if(action.task.id) {
        return state.map(item =>{
          if (item.id === newTask.id) return newTask
          return item
        })
      }
      return [...state, newTask]
      
    case types.UPDATE_STATUS:
      id = action.id;
      return state.map(item => {
        if(item.id === id) {
          return {...item, status: !item.status}
        }
        return {...item}
      })
    case types.DELETE_TASK:
      id = action.id;
      var newState = state.filter(item => item.id !== id);
      localStorage.setItem('tasks', JSON.stringify(newState))
      return newState
    default: return state;
  }
}

export default myReducer;
