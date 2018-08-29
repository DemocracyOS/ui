import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const MenuStyledLink = styled(Link)`
`
const MenuLinkItem = styled.li`
color:#192a34;
display:inline-block;
padding:10px 20px;
font-size:1.6rem;
`
const Menulink = ({ name, url }) => (
  <MenuStyledLink to={url}>
    <MenuLinkItem>
      {name}
    </MenuLinkItem>
  </MenuStyledLink>
)

Menulink.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
}

export default Menulink
