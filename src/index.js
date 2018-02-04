import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import reduxThunk from 'redux-thunk'

import App from './components/app'
import Signin from './components/AuthenticationRoutes/signin'
import Signout from './components/AuthenticationRoutes/signout'
import Signup from './components/AuthenticationRoutes/signup'
import AuthenticatedPage from './components/AuthenticatedPage'
import RequireAuth from './HOC/authenticationHOC'
import LandingPage from './components/LandingPage'
import reducers from './reducers'
import { AUTH_USER } from './actions/actionTypes'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

const token = localStorage.getItem('token')
if (token)
  store.dispatch({ type: AUTH_USER })

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={LandingPage} />
        <Route path='signin' component={Signin} />
        <Route path='signout' component={Signout} />
        <Route path='signup' component={Signup} />
        <Route path='home' component={RequireAuth(AuthenticatedPage)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'))
