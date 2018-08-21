import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  color:#5e99bc;
  font-size: 1em;
  font-weight:500;
  margin: 1em;
  padding: 0.5em 2em;
  border-radius: 20px;
  
  background: ${props => props.primary ? '#5E98BA' : 'white'};
  color: ${props => props.primary ? 'white' : '#5E98BA'};
  border: 2px solid ${props => props.primary ? '#5E98BA' : ' #A5CEE7'};
`;

export default Button
