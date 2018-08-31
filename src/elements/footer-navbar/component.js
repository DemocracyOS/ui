import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FooterBar = styled.footer`
  min-width:800px;  
  margin-left:auto;
  margin-right:auto;
  height: 110px;
  display: flex;
  flex-wrap:wrap;
  flex-direction:column;
  box-sizing:border-box;
  > a {
    color: #3d657e;
    text-transform:uppercase;
    display: inline-block;
    font-family: var(--medium);
    padding: 10px 10px;
    font-size: 1.3rem;
    width:190px;

    box-sizing:border-box;
  }
`

const footerBar = ({ children }) => (
  <FooterBar>
    { children }
  </FooterBar>

)

footerBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default footerBar
