import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledText = styled.div`
  padding-left: 13rem;
  padding-top:6.8rem;
  width: 512px;
  height: 540px;
  display:flex;
  flex-direction:column;
  a {
    text-decoration:none;
    font-size:1.6rem;
    color:#fff;
  }
`

const AboutText = ({ children }) => (
  <StyledText>
    {children}
  </StyledText>
)

AboutText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default AboutText
