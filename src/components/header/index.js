import React, { Component } from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  height: 50px;
`

class Header extends Component {
  render() {
    return (
      <Nav>
        <Link to={'/signin'}>Sign In</Link> |
        <Link to={'/signup'}>Sign Up</Link> |
        <Link to={'/signout'}>Sign Out</Link> |
        <Link to={'/home'}>Home</Link> (Must be signed in)
      </Nav>
    )
  }
}

export default Header
