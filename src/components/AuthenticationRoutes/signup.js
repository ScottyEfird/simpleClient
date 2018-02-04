import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'

class Signup extends Component {
  handleFormSubmit(formProps) {
    this.props.signupUser(formProps)
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className='form-group'>
          <label>Email:</label>
          <input className='form-control' {...email} />
          {email.touched && email.error && <div className='error'>{email.error}</div>}
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input type='password' className='form-control' {...password} />
          {password.touched && password.error && <div className='error'>{password.error}</div>}
        </fieldset>
        <button action='submit' className='btn btn-primary'>Sign Up</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password']
}, null, actions)(Signup)
