import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// import UserLink from '../../elements/user-link/component'

const Bar = styled.div`
  > a {
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
  }
`

const UserBar = ({ children }) => (
  <Bar>
    { children }
  </Bar>
)

UserBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default UserBar
