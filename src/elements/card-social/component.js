import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
height:85px;
border-top: 1px solid #e9e9e9;
font-size:1.4rem;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
box-sizing:border-box;
color: #2d4b5e;
font-size:1.6em;
box-sizing:border-box;
margin:0px 20px 0px 20px;
box-sizing:border-box;
`
const CommentaryItems = styled.div`
padding-bottom:1.3rem;
text-transform:uppercase;
`

const LimitDate = styled.div`
font-size:1.2rem;
`
const Span = styled.span`
  font-family: var(--bold);
`
const Social = ({ commentaryItems, limitDate }) => (
  <Wrapper>
    <CommentaryItems>
      <Span> {commentaryItems}</Span> {commentaryItems === 1 ? ' Comentario' : ' Comentarios'}
    </CommentaryItems>
    <LimitDate><span>Aportes habilidatos hasta: </span>{limitDate}</LimitDate>
  </Wrapper>
)

Social.propTypes = {
  commentaryItems: PropTypes.string.isRequired,
  limitDate: PropTypes.string
}

export default Social
