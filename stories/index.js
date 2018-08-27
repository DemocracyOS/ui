import React from 'react'
import { storiesOf } from '@storybook/react'
import { addDecorator } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import '../src/index.css'
import NavBarTitle from '../src/elements/navbar-title/component'

addDecorator((story, context) => withInfo('common info')(story)(context))

storiesOf('elements/NavBarTitle', module)
  .add('Navbar Title', () => (
    <NavBarTitle>Default title</NavBarTitle>
  ))
