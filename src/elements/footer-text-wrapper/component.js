import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledText = styled.footer`
  height: 80px;
`
const FooterText = ({ children }) => (
  <StyledText>
    { children }
  </StyledText>

)

FooterText.propTypes = {
  children: PropTypes.string
}

export default FooterText
