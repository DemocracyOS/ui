import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledAbout = styled.div`
    height:540px;
    width:100%;
    background-color: #5c97bc;
  }
`

const About = ({ children }) => (
  <StyledAbout>
    { children }
  </StyledAbout>
)

About.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default About
