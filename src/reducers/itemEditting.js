import * as types from './../constants/ActionTypes'

var initialState = { }

var myReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.EDIT_TASK:
      var newTask = action.task
      return newTask
    default: return state;
  }
}

export default myReducer;
