import styled from 'styled-components'
import React from 'react';

const CardProyecto = styled.div`
  width: 330px;
  height:250px;
  border-radius: 9px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  box-sizing:border-box;
`

const CardContent = styled.div`
  width: 100%;
  height:170px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:flex-start;
  box-sizing:border-box;
  padding-left:20px;
`
const TagTitle = styled.div`
  background:var(--primary-color);
  height:40px;
  width:100%;
  border-top-left-radius:9px;
  border-top-right-radius:9px;
  font-size:1.3em;
  color: #fff;
  display:flex;
  align-items:center;
  text-transform:uppercase;
  padding-left:20px;
  box-sizing:border-box;
`;

const Title = styled.div`
  font-size:2em;
  font-weight:900;
  padding-top:1.5em;
  padding-bottom:.5em;
`;
const DateCreated = styled.div`
  width:100%;
  font-size:1.3em;
  text-align:left;
  color:var(--gray);

`;
const SocialFooter = styled.div`
  width:100%;
  height:50px;
  border-bottom-left-radius:9px;
  border-bottom-right-radius:9px;
  border-top: 1px solid var(--gray);
  font-size:1.3em;
  font-weight:100;
  display:flex;
  align-items:center;
  box-sizing:border-box;
  padding-left:20px;
  color: var(--primary-color);
  font-size:1.6em;
`;

export default function cardProyecto(props) {
  return (
    <CardProyecto>
      <TagTitle>{props.tagTitle}</TagTitle>
      <CardContent>
        <Title>{props.title}</Title>
        <DateCreated>{props.dateCreated}</DateCreated>
      </CardContent>   
      <SocialFooter>
        {props.commentaryItems} {props.commentaryItems === 1 ? ' Comentario' : ' Comentarios'}
      </SocialFooter>
    </CardProyecto>
  )
}
