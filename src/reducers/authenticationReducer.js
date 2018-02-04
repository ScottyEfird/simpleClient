import * as actions from '../actions/actionTypes'

export default function(state = {}, action) {
  switch (action.type) {
  case actions.AUTH_USER:
    return { ...state, authenticated: true, error: ''}
  case actions.UNAUTH_USER:
    return { ...state, authenticated: false, error: '' }
  case actions.AUTH_ERROR:
    return { ...state, error: action.payload }
  case actions.FETCH_MESSAGE:
    return { ...state, message: action.payload }
  default:
    return state
  }
}
