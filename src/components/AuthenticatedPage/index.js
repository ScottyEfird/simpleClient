import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class AuthenticatedPage extends Component {
  componentWillMount() {
    this.props.fetchMessage()
  }

  render() {
    return (
      <div>
        This is an authenticated page.
        {this.props.message}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return { message: state.authentication.message }
}

export default connect(mapStateToProps, actions)(AuthenticatedPage)
