import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledAboutP = styled.p`
    color: red;
    font-size:1.8rem;
    font-family:var(--light);
  `
const AboutP = ({ children }) => (
  <StyledAboutP>
    {children}

  </StyledAboutP>
)

AboutP.propTypes = {
  children: PropTypes.string
}

export default AboutP
