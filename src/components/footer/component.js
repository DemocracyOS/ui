import styled from 'styled-components'
import React from 'react';

const Container = styled.div`
  width: 100%;
  height:400px;
  background:#5E98BA;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  padding-bottom:20px;
`
const P = styled.p`
 color: rgba(255, 255, 255, 0.5);
 font-size:12px;
 padding:5px;
 margin:0;
`

export default function footer() {
    return (
  <Container>
    <P>Honorable Cámara de diputados de la Nación Argentina | Congreso de la Nación Argentina | Av. Rivadavia 1864 | Ciudad Autónoma de Bs. As. (C.P. C1033AAV) | (54-11) 4127-7100</P>
    <P>La información contenida en este sitio es de dominio público y puede ser utilizada libremente. Se solicita citar la fuente.</P>     
  </Container>
)
}
