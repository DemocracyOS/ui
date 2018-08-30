import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledLeftColumn = styled.div`
  width: 50%;
  > button {
    margin: 37px 0;
  }
`

const HeroLeftColumn  = ({ children }) => (
  <StyledLeftColumn>
    { children }
  </StyledLeftColumn>
)

HeroLeftColumn.PropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default HeroLeftColumn
