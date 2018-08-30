import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CardHeader from '../../elements/card-header/component'
import CardContent from '../../elements/card-content/component'
import CardSocial from '../../elements/card-social/component'

const CardContainer = styled.div`
width: 370px;
height: 340px;
box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
background-color: #ffffff;
border: solid 1px #e9e9e9;
display:flex;
flex-direction:column;
justify-content:space-between;
background: #fff;
box-sizing: border-box;

`

const Card = ({ img, commentaryItems, limitDate, tagTitle, title, avatarImg, name, charge }) => (
  <CardContainer>
    <CardHeader img={img} />
    <CardContent tagTitle={tagTitle} title={title} avatarImg={avatarImg} name={name} charge={charge} />
    <CardSocial commentaryItems={commentaryItems} limitDate={limitDate} />
  </CardContainer>
)

Card.propTypes = {
  img: PropTypes.string,
  commentaryItems: PropTypes.string.isRequired,
  limitDate: PropTypes.date,
  title: PropTypes.string.isRequired,
  tagTitle: PropTypes.string.isRequired,
  avatarImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  charge: PropTypes.string.isRequired

}
export default Card
