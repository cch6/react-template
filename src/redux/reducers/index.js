import { combineReducers } from 'redux'
import counter from './counter'
import login from './Login'

export default combineReducers({
  counter, login
})
