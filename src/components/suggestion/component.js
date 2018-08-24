import React from 'react'
import styled from 'styled-components'

const SuggestionWrapper = styled.div`
  border-radius: 5px;
  background-color: var(--white);
  border: 1px solid var(--gray);
  padding: 1em;
  width: 300px;
`
const SuggestionLabel = styled.span`
  color: var(--highlight);
  text-transform: uppercase;
`

const SuggestionHeader = styled.header`
  margin: 1em 0;
  display: flex;
  align-items: flex-start;
`

const SuggestionAvatar = styled.img`
  margin-right: 1em;
  border-radius: 100%;
  width: 25px;
  height: 25px;
`

const SuggestionUser = styled.div`
`
const SuggestionUserName = styled.p`
  margin: 0;
  font-family: var(--bold);
  &:after {
    content: '.';
    margin-left: 1em;
  }
`

const SuggestionUserRole = styled.span``

const SuggestionUserDate = styled.span``

const SuggestionBody = styled.div`
`


export default function Suggestion(props) {
  return (
    <SuggestionWrapper>
      <SuggestionLabel>Aporte</SuggestionLabel>
      <SuggestionHeader>
        <SuggestionAvatar src='https://r.hswstatic.com/w_907/gif/tesla-cat.jpg' />
        <SuggestionUser>
          <SuggestionUserName>Ricardo Sarasa</SuggestionUserName>
          <SuggestionUserRole>Consultor Marketing</SuggestionUserRole>
          <SuggestionUserDate>29 de Julio</SuggestionUserDate>
        </SuggestionUser>
      </SuggestionHeader>
      <SuggestionBody>Revaluation ultimate derive sexuality god abstract. Of deceptions ultimate evil depths. Hope strong moral law suicide ultimate deceptions revaluation. Truth will philosophy gains disgust play sea passion good play enlightenment horror. Sea good depths insofar abstract disgust value christian passion faith eternal-return.</SuggestionBody>
    </SuggestionWrapper>
  )
}
