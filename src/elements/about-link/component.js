import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LinkWrapper = styled.div`
width: 250px;
height: 40px;
display:flex;
flex-direction:row;
wrap:nowrap;
justify-content:flex-start;
`
const AboutLink = ({ children }) => (
  <LinkWrapper>
    {children}
  </LinkWrapper>
)

AboutLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
export default AboutLink
