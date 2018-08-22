import styled from 'styled-components'
import React from 'react'


const Container = styled.div`
  width: 80%;
  height:135px;
  border-radius: 9px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  box-sizing:border-box;
`

const LeftContainer = styled.div`
  width: 70%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  box-sizing:border-box;
  padding-left:20px;
  padding-top:20px;
`
const RightContainer = styled.div`
  width: 30%;
  height:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  box-sizing:border-box;
  padding-left:20px;
`
const TagTitle = styled.div`
  color:var(--primary-color);
  font-size:1.3em;
  text-align:left;
  text-transform:uppercase;
`;

const Title = styled.div`
  font-size:2.3em;
  font-weight:900;
  padding-bottom:.5em;
  padding-top:.3em;
`;

const DateCreated = styled.div`
  font-size:1.3em;
  text-align:left;
  color:var(--gray);

`;

export default function cardDraft(props) {
    return (
  <Container>

    <LeftContainer>
      <TagTitle>{props.tagTitle}</TagTitle>
      <Title>{props.title}</Title>
      <DateCreated>Creado el {props.dateCreated}</DateCreated>
    </LeftContainer>
    
    <RightContainer>
   {  /*  <Progress></Progress>
      <Edit>
        <Button>Editar</Button>
        <Button>Borrar</Button>
   </Edit> */ }
    </RightContainer>


  </Container>
    )
  }

  