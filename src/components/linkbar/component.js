import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  width: 600px;
  display:flex;
  flex-direction:row;
  align-items:center;
  list-style:none;
  padding-left:0;
  > a {
    color: #192a34;
    display: inline-block;
    padding: 10px 20px;
    font-size: 1.6rem;
  }
`
const Linkbar = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
)

Linkbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Linkbar
