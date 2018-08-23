import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
  display: inline-block;
  color:#5e99bc;
  font-size: 2em;
  font-weight: 500;
  margin: 1em;
  padding: 0.5em 2em;
  border-radius: 20px;
  
  background: ${props => props.primary ? 'var(--primary-color)' : 'white'};
  color: ${props => props.primary ? 'white' : 'var(--secondary-color)'};
  border: 2px solid ${props => props.primary ? 'var(--primary-color)' : 'var(--secondary-color)'};
`;

const Button = (props) => (
  <ButtonContainer {...props} />
)

export default Button
