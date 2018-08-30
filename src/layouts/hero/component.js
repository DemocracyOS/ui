import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledHero = styled.div`
  margin: 105px 80px 55px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const Hero = ({ children }) => (
  <StyledHero>
    { children }
  </StyledHero>
)

Hero.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Hero
