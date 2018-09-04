import styled from 'styled-components'

const StyledText = styled.div`
  padding-left: 13rem;
  padding-top:6.8rem;
  width: 512px;
  height: 540px;
  display:flex;
  flex-direction:column;
  h2, h3, p {
    color: #fff;
  }
  p {
  font-size:1.8rem;
  font-family:var(--light);
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  }
  h2 {
  font-size:4rem;
  font-family:var(--bold);
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  }
  a {
    text-decoration:none;
    font-size:1.6rem;
    color:#fff;
  }
`

export default StyledText
