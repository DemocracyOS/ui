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
  UserBar,
  LinkBar,
  Button,
  Card,
  SocialIcon,
  SocialBar,
  NavBarTitle,
  FooterLogo,
  FooterBar,
  ParticipateItem,
  ParticipateTextbox,
  ParticipateP,
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

storiesOf('components/UserBar', module)
  .add('UserBar', () => (
    <UserBar>
      <Button>Create account</Button>
      <Button primary>Login</Button>
    </UserBar>
  ))

storiesOf('components/linkbar', module)
  .add('LinkBar', () => (
    <LinkBar>
      <Link to='/'>Link 1</Link>
      <Link to='/'>Link 2</Link>
      <Link to='/'>Link 3</Link>
    </LinkBar>
  ))

const project = {
  img: 'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg',
  title: 'Acceso a la educacion pública',
  tagTitle: 'libertad de expresión',
  author: {
    avatarImg: 'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg',
    name: 'Alvarez Rodriguez, María C',
    party: 'Frente para la Victoria - PJ'
  },
  commentaries: 33,
  limitDate: '22/10/1990'
}

storiesOf('components/card', module)
  .add('Card', () => (
    <Card project={project} />
  ))

storiesOf('components/footerBar', module)
  .add('FooterBar', () => (
    <FooterBar>
      <NavBarTitle footer>
        <Link to='/'><FooterLogo img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'} /></Link>
      </NavBarTitle>
      <SocialBar>
        <SocialIcon
          img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'}
          link='/' />
        <SocialIcon img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'}
          link='/' />
      </SocialBar>
      <Link to='/'><a>Proyectos</a></Link>
      <Link to='/'><a>La Propuesta</a></Link>
      <Link to='/'><a>Preguntas Frecuentes</a></Link>
      <Link to='/'><a>Términos y condiciones</a></Link>
    </FooterBar>
  ))

storiesOf('components/social-bar', module)
  .add('Social bar', () => (
    <SocialBar>
      <SocialIcon img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'} link='/' />
      <SocialIcon img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'} link='/' />
      <SocialIcon img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'} link='/' />
    </SocialBar>
  ))

storiesOf('components/participate-item', module)
  .add('Participate Item', () => (
    <ParticipateItem>
      <ParticipateTextbox number={'1'} action={'Informate'} description={'Entrá y lee'} />
      <Separator />
      <ParticipateP text={'Elegí un proyecto que te interese  o te parezca relevante. Primero vas a encontrar una introducción a la propuesta de ley con los antecedentes, fundamentos e información relevante. a la ley, como surgió y su importancia. Después podés pasar a leer el texto del proyecto de ley.'} />
    </ParticipateItem>
  ))
