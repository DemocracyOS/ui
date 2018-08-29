import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import UserLink from '../../elements/user-link/component'

const Bar = styled.div``

const UserBar = ({ links }) => (
  <Bar>
    {links.map(({ name, url }, i) => (
      <UserLink name={name} url={url} />
    ))}
  </Bar>
)

UserBar.propTypes = {
  links: PropTypes.array.isRequired
}

export default UserBar
