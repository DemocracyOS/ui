import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const UserStyledLink = styled(Link)`
  font-family: var(--bold);
  font-size: 1.6rem;
  color: #4f81a1;
  &:first-child {
    margin-right: 21px;
  }
  &:first-child:after {
    content: '·';
    margin-left: 21px;
  }
`

const UserLink = ({ name, url }) => (
  <UserStyledLink to={url}>
    {name}
  </UserStyledLink>
)

UserLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default UserLink
