import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import MenuLink from '../../elements/linkbar-link/component'

const Wrapper = styled.ul`
  width: 600px;
  display:flex;
  flex-direction:row;
  align-items:center;
  list-style:none;
  padding-left:0;
`
const Linkbar = ({ links }) => (
  <Wrapper>
    {links.map(({ name, url }, i) => (
      <MenuLink name={name} url={url} />
    ))}
  </Wrapper>
)

Linkbar.propTypes = {
  links: PropTypes.array.isRequired
}

export default Linkbar
