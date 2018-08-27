import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.a`
  font-family: var(--bold);
  font-size: 3rem;
  color: #192a34;
  text-decoration: none;
`

const NavBarTitle = (props) => (
  <Link to='/'>
    <Title>{ props.children }</Title>
  </Link>
)

NavBarTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default NavBarTitle
