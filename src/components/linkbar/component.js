/* import styled from 'styled-components'
import React from 'react'
// import MenuLink from '../../elements/linkbar-link/component'

const Linkbar = styled.ul`
  width: 600px;
  display:flex;
  flex-direction:row;
  align-items:center;
  list-style:none;
  padding-left:0;
  background: var(--primary-color);

`

const linkbar = ({this.props}) => (
    <Linkbar>
    {this.props.map((i) => {
      return (
        <MenuLink href={`this.props.${i}.href`} key={i} title={`this.props.${i}.title`} />
      )})}
    </Linkbar>
  )
  export default linkbar
  */
