import React from 'react'
import { Router } from 'react-router'
import { Link } from 'react-router-dom'
import createMemoryHistory from 'history/createMemoryHistory'
import { storiesOf } from '@storybook/react'
import { addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import '../src/index.css'
import NavBarTitle from '../src/elements/navbar-title/component'
import UserBar from '../src/components/user-bar/component'
import Linkbar from '../src/components/linkbar/component'
import  { HeroTitle, HeroSubtitle, HeroButton, HeroImg } from '../src/index.js'
import TitleH2 from '../src/elements/title-h2/component'
import SubtitleH3 from '../src/elements/subtitle-h3/component'

addDecorator((story, context) => withInfo('common info')(story)(context))
addDecorator((story) => <Router history={history}>{story()}</Router>)
addDecorator((story) => (
  <div style={{ textAlign: 'center', 'margin-top': '20px' }}>
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
    <NavBarTitle>Default title</NavBarTitle>
  ))

storiesOf('components/UserBar', module)
  .add('UserBar', () => (
    <UserBar>
      <Link to='/'>Create account</Link>
      <Link to='/'>Log in</Link>
    </UserBar>
  ))

storiesOf('components/linkbar', module)
  .add('Linkbar', () => (
    <Linkbar>
      <Link to='/'>Inicio</Link>
      <Link to='/'>Proyectos</Link>
      <Link to='/'>Cómo participar</Link>
      <Link to='/'>La propuesta</Link>
    </Linkbar>
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

storiesOf('elements/HeroButton', module)
  .add('Hero Button', () => (
    <HeroButton onClick={action('clicked')}>Hero button</HeroButton>
  ))

storiesOf('elements/HeroImg', module)
  .add('Hero Img', () => (
    <HeroImg src='' />
  ))

storiesOf('elements/Title-h2', module)
  .add('H2 - Title', () => (
    <TitleH2>Proyectos en debate</TitleH2>
  ))

storiesOf('elements/subtitle-h3', module)
  .add('H3 - Subtitle', () => (
    <SubtitleH3>Estos son los proyectos</SubtitleH3>
  ))
