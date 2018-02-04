import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import styled from 'styled-components'

const Message = styled.div`
  color: gray;
`

class AuthenticatedPage extends Component {
  componentWillMount() {
    this.props.fetchMessage()
  }

  render() {
    return (
      <div>
        This is an authenticated page with an authenticated message from the server.
        <Message>
          {this.props.message}
        </Message>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return { message: state.authentication.message }
}

export default connect(mapStateToProps, actions)(AuthenticatedPage)
