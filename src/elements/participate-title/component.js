import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.h3`
  font-size: 4rem;
  color: #101a21;
  padding:0 10 10 0;
  line-height: 3.5;
  margin-left:auto;
  margin-right:auto;
`

const participateTitle = (props) => (
  <Title>{ props.children }</Title>
)

participateTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default participateTitle
