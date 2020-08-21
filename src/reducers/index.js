import { combineReducers } from 'redux'
import tasks from './tasks'
import isDisplayForm from './isDisplayForm'
import itemEditting from './itemEditting'
import filterTable from './filterTable'

export default combineReducers({
  tasks,
  isDisplayForm,
  itemEditting,
  filterTable
})
