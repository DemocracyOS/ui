import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const UserA = styled.a`
  font-family: var(--bold);
  font-size: 1.6rem;
  color: #4f81a1;
  &:nth-child(even) {
    background: palevioletred;
  }
`

const UserLink = ({ name, url }) => (
  <Link to={url}>
    <UserA>{name}</UserA>
  </Link>
)

UserLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default UserLink
