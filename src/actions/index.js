import axios from 'axios'
import { browserHistory } from 'react-router'
import * as actions from '../actions/actionTypes'

const API_URL = 'http://localhost:3090'

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${API_URL}/signin`, { email, password })
      .then(res => {
        dispatch({ type: actions.AUTH_USER })
        localStorage.setItem('token', res.data.token)
        browserHistory.push('/home')
      })
      .catch(() => {
        console.log('incorrect email/pass')
      })
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${API_URL}/signup`, { email, password })
      .then(res => {
        dispatch({ type: actions.AUTH_USER })
        localStorage.setItem('token', res.data.token)
        browserHistory.push('/home')
      })
      .catch(res => {
        console.log(res)
      })
  }
}

export function signoutUser() {
  localStorage.removeItem('token')
  return {
    type: actions.UNAUTH_USER
  }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(API_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(res => {
        dispatch({
          type: actions.FETCH_MESSAGE,
          payload: res.data.message
        })
      })
  }
}
