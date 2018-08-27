import styled from 'styled-components'
import React from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
=======
>>>>>>> add story

const MenuLink = styled.li`
color:#000;
display:inline-block;
padding:10px 20px;
`
const Wrapper = styled.div`
`
const Menulink = (props) => (
  <Wrapper>
    <Link>
      <MenuLink>
        <a>
          {props.title}
        </a>
      </MenuLink>
    </Link>
  </Wrapper>
)

export default Menulink

<<<<<<< HEAD
Menulink.propTypes = {
  title: PropTypes.string
=======
export default function menulink () {
  return (
    <MenuLink>  Hola  </MenuLink>

  )
>>>>>>> add story
}
