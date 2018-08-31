import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  width:130px;
  height:50px;
  margin-right:70px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  `

const SocialBar = ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>

)

SocialBar.propTypes = {
  children: PropTypes.string
}

export default SocialBar
