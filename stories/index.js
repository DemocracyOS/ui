import React from 'react'
import { Router } from 'react-router';
import createMemoryHistory from 'history/createMemoryHistory'
import { storiesOf } from '@storybook/react'
import { addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import '../src/index.css'
import NavBarTitle from '../src/elements/navbar-title/component'

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
