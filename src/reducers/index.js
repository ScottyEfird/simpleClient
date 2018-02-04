import { combineReducers } from 'redux'
import { reducer as reduxformReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: reduxformReducer
})

export default rootReducer
