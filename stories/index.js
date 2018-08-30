import React from 'react'
import { Router } from 'react-router'
import createMemoryHistory from 'history/createMemoryHistory'
import { storiesOf } from '@storybook/react'
import { addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import '../src/index.css'
import NavBarTitle from '../src/elements/navbar-title/component'
import UserLink from '../src/elements/user-link/component'
import UserBar from '../src/components/user-bar/component'
import LinkbarLink from '../src/elements/linkbar-link/component'
import Linkbar from '../src/components/linkbar/component'
import { HeroTitle, HeroSubtitle, HeroButton, HeroImg } from '../src/index.js'
import TitleH2 from '../src/elements/title-h2/component'
import SubtitleH3 from '../src/elements/subtitle-h3/component'
import CardHeader from '../src/elements/card-header/component'
import UserAvatar from '../src/elements/user-avatar/component'
import CardContent from '../src/elements/card-content/component'
import CardSocial from '../src/elements/card-social/component'
import Card from '../src/components/card/component'

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

storiesOf('elements/UserLink', module)
  .add('UserLink', () => (
    <UserLink name='Log in' url='/' />
  ))

storiesOf('components/UserBar', module)
  .add('UserBar', () => (
    <UserBar links={[{ name: 'Create account', url: '/' }, { name: 'Log in', url: '/' }]} />
  ))

storiesOf('elements/linkbar-Link', module)
  .add('LinkbarLink', () => (
    <LinkbarLink name='Inicio' url='/' />
  ))

storiesOf('components/linkbar', module)
  .add('Linkbar', () => (
    <Linkbar links={[
      { name: 'Inicio', url: '/' },
      { name: 'Proyectos', url: '/' },
      { name: 'Cómo participar', url: '/' },
      { name: 'La propuesta', url: '/' }]} />
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
storiesOf('elements/card-header', module)
  .add('Card header', () => (
    <CardHeader img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'} />
  ))
storiesOf('elements/user-avatar', module)
  .add('User avatar', () => (
    <UserAvatar avatarImg={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'} name={'Alvarez Rodriguez, María C'} charge={'Frente para la victoria - PJ'} />
  ))
storiesOf('elements/card-content', module)
  .add('Card content', () => (
    <CardContent title={'Acceso a la educacion pública'} tagTitle={'libertad de expresión'} avatarImg={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'} name={'Alvarez Rodriguez, María C'} charge={'Frente para la victoria - PJ'} />
  ))

storiesOf('elements/card-social', module)
  .add('Card content', () => (
    <CardSocial commentaryItems={'33'} limitDate={'22/10/1990'} />
  ))

storiesOf('components/card', module)
  .add('Card', () => (
    <Card img={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'} title={'Acceso a la educacion pública'} tagTitle={'libertad de expresión'} avatarImg={'https://i.ytimg.com/vi/US8BmC2ZeBE/hqdefault.jpg'} name={'Alvarez Rodriguez, María C'} charge={'Frente para la victoria - PJ'} commentaryItems={'33'} limitDate={'22/10/1990'} />
  ))
