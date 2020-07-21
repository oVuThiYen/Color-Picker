import { combineReducers } from 'redux'
import tasks from './tasks'
import isDisplayForm from './isDisplayForm'
import itemEditting from './itemEditting'

export default combineReducers({
  tasks,
  isDisplayForm,
  itemEditting
})
