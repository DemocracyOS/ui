import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: var(--white);
  font-size: 1.8rem;
  color: #5c97bc;
  border-style: none;

  color: ${(props) => props.viewmore ? '#2d4b5e' : 'var(--secondary-color)'};
  border: ${(props) => props.viewmore ? '2px solid var(--primary-color)' : 'none'};
  `

const styledButton = (props) => (
  <StyledButton {...props} />
)

export default styledButton
