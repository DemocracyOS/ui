import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NavBarTitle = styled.span`
 > a {
   font-family: var(--bold);
   font-size: 3rem;
   color: ${(props) => props.footer ? '#4f81a1' : '#2d4b5e'};
   text-decoration: none;
 }
`

NavBarTitle.propTypes = {
  footer: PropTypes.bool
}

export default NavBarTitle
