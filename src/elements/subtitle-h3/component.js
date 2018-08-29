import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h3`
  font-size: 1.6rem;
  color: var(--secondary-color);
  padding:0 10 10 0;
`

const SubtitleH3 = (props) => (
  <Title>{ props.children }</Title>
)

SubtitleH3.propTypes = {
  children: PropTypes.string.isRequired
}

export default SubtitleH3
