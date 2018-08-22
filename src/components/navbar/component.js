import styled from 'styled-components'
import React from 'react';

const Container = styled.div`
  width: 100%;
  height:100px;
  background: #5E98BA;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  color:#fff;
  z-index: 1;
  font-size:15px;
  margin-bottom:30px;
`
const Logo = styled.div`
  width:180px;
  height:100%;
  display:flex;
  align-items:center;
  padding-left:20px;
  font-weight:900;
`
const Links = styled.div`
  width: 600px;
  height:100%;
  display:flex;
  flex-direction:row;
  align-items:center;

`
const UL = styled.ul`
  list-style:none;
  padding-left:0;
`
const MenuLink = styled.li`
color:#fff;
display:inline-block;
padding:10px 20px;
`
const Notifications = styled.div`
color:#fff;
`
const User = styled.div`
width:230px;
height:100%;
border-left:1px solid #5182A0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const ProfilePicture = styled.img`
background:#fff;
`
const Name = styled.div`
color:#fff;
font-weight:bold;
font-size:12px;
`
const Charge = styled.div`
color:#fff;
font-size:10px;
font-weight:100;
`

export default function navBar() {
  return (
<Container>

    <Logo>Proyectos de ley abiertos</Logo>

    <Links>
        <UL>
        <MenuLink>Inicio</MenuLink>
        <MenuLink>Crear nuevo documento</MenuLink>
        <MenuLink>Borradores</MenuLink>
        <MenuLink>Proyectos en debate</MenuLink>
        </UL>
    </Links>

    <Notifications> 1 notificacion</Notifications>
    <User>
      <ProfilePicture></ProfilePicture>
      <Name>Jorge García</Name>
      <Charge>Asesor</Charge>
    </User>
</Container>
  )
}
