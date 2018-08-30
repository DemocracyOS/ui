import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
width:100%;
height:85px;
border-top: 1px solid var(--gray);
font-size:1.3rem;
font-family: var(--bold);
display:flex;
align-items:flex-start;
box-sizing:border-box;
padding-left:20px;
color: var(--primary-color);
font-size:1.6em;
box-sizing:border-box;
`

const Social = ({ commentaryItems }) => (
  <Wrapper>
    {commentaryItems} {commentaryItems === 1 ? ' Comentario' : ' Comentarios'}
  </Wrapper>
)

Social.propTypes = {
  commentaryItems: PropTypes.string.isRequired
}

export default Social
