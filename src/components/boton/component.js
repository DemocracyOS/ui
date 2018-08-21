import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  color:#5e99bc;
  font-size: 1em;
  font-weight:400;
  margin: 1em;
  padding: 0.5em 2em;
  border-radius: 20px;
  
  background: ${props => props.primary ? 'var(--primary-color)' : 'white'};
  color: ${props => props.primary ? 'white' : 'var(--primary-color)'};
  border: 2px solid ${props => props.primary ? 'var(--primary-color)' : ' var(--secondary-color)'};
`;

export default Button
