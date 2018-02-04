import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class Signin extends Component {
  handleSubmit({email, password}) {
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props

    console.log(this.props)

    return (
      <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
        <fieldset className='form-group'>
          <label>Email:</label>
          <Field name='email' className='form-control' component='input' type='text' />
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <Field name='password' className='form-control' component='input' type='text' />
        </fieldset>
        <button action='submit' className='btn btn-primary'>Login</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin)