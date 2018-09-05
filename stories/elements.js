import React from 'react'
import { Router } from 'react-router'
import { Link } from 'react-router-dom'
import createMemoryHistory from 'history/createMemoryHistory'
import { storiesOf, addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
// import { withNotes } from '@storybook/addon-notes'
import '../src/index.css'
import {
  NavBarTitle,
  HeroTitle,
  HeroSubtitle,
  Button,
  HeroImg,
  TitleH2,
  SubtitleH3,
  CardHeader,
  UserAvatar,
  CardContent,
  CardSocial,
  SocialIcon,
  P,
  FooterTextWrapper,
  FooterLogo,
  ParticipateP,
  ParticipateTextbox,
  ParticipateTitle,
  Separator
} from '../src/index.js'

addDecorator((story, context) => withInfo('common info')(story)(context))
addDecorator((story) => <Router history={history}>{story()}</Router>)
addDecorator((story) => (
  <div style={{ 'display': 'flex', 'justifyContent': 'center', 'marginTop': '50px', 'flexWrap': 'wrap' }}>
    {story()}
  </div>
))

const history = createMemoryHistory()

history.push = action('history.push')
history.replace = action('history.replace')
history.go = action('history.go')
history.goBack = action('history.goBack')
history.goForward = action('history.goForward')

storiesOf('elements/NavBarTitle', module)
  .add('Navbar Title', () => (
    <NavBarTitle>
      <Link to='/'>Default title</Link>
    </NavBarTitle>
  ))

storiesOf('elements/HeroTitle', module)
  .add('Hero Title', () => (
    <HeroTitle>Hero title</HeroTitle>
  ))

storiesOf('elements/HeroSubtitle', module)
  .add('Hero Subtitle', () => (
    <HeroSubtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam nibh vitae dolor euismod, non dapibus neque euismod. Suspendisse eget hendrerit nunc, fermentum posuere nisl. Curabitur nisi arcu, euismod non convallis vitae, pulvinar et ipsum. Nulla eget arcu tortor. Pellentesque faucibus sapien ac diam ornare congue. Curabitur nec ligula sollicitudin, imperdiet nisi et, maximus enim. Nunc id porttitor nulla. Nulla facilisi. Suspendisse eu vestibulum lacus, et pellentesque elit. Sed non condimentum odio.
    </HeroSubtitle>
  ))

storiesOf('elements/Button', module)
  .add('Button', () => (
    <Button onClick={action('clicked')}>Button</Button>
  ))

storiesOf('elements/HeroImg', module)
  .add('Hero Img', () => (
    <HeroImg src='' />
  ))

storiesOf('elements/Title-h2', module)
  .add('H2 - Title', () => (
    <TitleH2>Title H2</TitleH2>
  ))

storiesOf('elements/subtitle-h3', module)
  .add('H3 - Subtitle', () => (
    <SubtitleH3>Subitle H3</SubtitleH3>
  ))

storiesOf('elements/card-header', module)
  .add('Card header', () => (
    <CardHeader img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'} />
  ))
storiesOf('elements/user-avatar', module)
  .add('User avatar', () => (
    <UserAvatar avatarImg={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'} name={'Alvarez Rodriguez, María C'} party={'Frente para la victoria - PJ'} />
  ))
storiesOf('elements/card-content', module)
  .add('Card content', () => (
    <CardContent title={'Acceso a la educacion pública'} tagTitle={'libertad de expresión'} avatarImg={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'} name={'Alvarez Rodriguez, María C'} party={'Frente para la victoria - PJ'} />
  ))

storiesOf('elements/card-social', module)
  .add('Card content', () => (
    <CardSocial commentaries={33} limitDate={'22/10/1990'} />
  ))

storiesOf('elements/social-icon', module)
  .add('Social icon', () => (
    <SocialIcon img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'} />
  ))

storiesOf('elements/footerLogo', module)
  .add('FooterLogo', () => (
    <FooterLogo img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'} />
  ))

storiesOf('elements/FooterTextWrapper', module)
  .add('FooterTextWrapper', () => (
    <FooterTextWrapper>
      <P>Honorable Cámara de diputados de la Nación Argentina | Congreso de la Nación Argentina | Av. Rivadavia 1864 | Ciudad Autónoma de Bs. As. (C.P. C1033AAV) | (54-11) 4127-7100</P>
      <P>La información contenida en este sitio es de dominio público y puede ser utilizada libremente. Se solicita citar la fuente.</P>
    </FooterTextWrapper>
  ))

storiesOf('elements/P', module)
  .add('P', () => (
    <P>Honorable Cámara de diputados de la Nación Argentina | Congreso de la Nación Argentina | Av. Rivadavia 1864 | Ciudad Autónoma de Bs. As. (C.P. C1033AAV) | (54-11) 4127-7100</P>
  ))

storiesOf('elements/ParticipateP', module)
  .add('P', () => (
    <ParticipateP text={'text'} />
  ))
storiesOf('elements/ParticipateTextbox', module)
  .add('Participate textbox', () => (
    <ParticipateTextbox number={'01'} action={'Informate'} description={'Entrá y lee.'} />
  ))
storiesOf('elements/separator', module)
  .add('Separator', () => (
    <Separator />
  ))
storiesOf('elements/participate-title', module)
  .add('Title', () => (
    <ParticipateTitle>Title</ParticipateTitle>
  ))
