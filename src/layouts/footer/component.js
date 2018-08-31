import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledFooter = styled.footer`
  width: 100%;
  height: 33.6rem;
  background-color: var(--white);

`

const Footer = ({ children }) => (
  <StyledFooter>
    { children }
  </StyledFooter>

)

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Footer
