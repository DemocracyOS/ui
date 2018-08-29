import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.span`
  > a {
    font-family: var(--bold);
    font-size: 3rem;
    color: #192a34;
    text-decoration: none;
  }
`

const NavBarTitle = ({ children }) => (
  <Title>{ children }</Title>
)

NavBarTitle.propTypes = {
  children: PropTypes.node.isRequired
}

export default NavBarTitle
