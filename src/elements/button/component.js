import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  min-width: 125px;
  height: 39px;
  background-color: var(--white);
  font-size: 1.4rem;
  color: #5c97bc;
  border-style: none;
  border-radius: 3px;

/* primary = blue background, secondary = white background */
  background-color: ${(props) => props.primary ? '#5c97bc' : 'var(--white)'};
  color: ${(props) => props.primary ? 'var(--white)' : '#2c4c61'};
  border: ${(props) => props.withborder ? 'solid 2px #5c97bc' : 'none'};
 /* align-self: ${(props) => props.primary ? 'center' : 'auto'} */;
  `

const styledButton = (props) => (
  <StyledButton {...props} />
)

export default styledButton
