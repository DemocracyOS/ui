import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

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

Menulink.propTypes = {
  title: PropTypes.string
}
