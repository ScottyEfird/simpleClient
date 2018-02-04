import { combineReducers } from 'redux'
import { reducer as reduxformReducer } from 'redux-form'
import authenticationReducer from './authenticationReducer'

const rootReducer = combineReducers({
  form: reduxformReducer,
  authentication: authenticationReducer
})

export default rootReducer
