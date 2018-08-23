import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/components/button/component.js';
import '../src/index.css'

storiesOf('Button', module)
  .add('Primary button', () => (
    <Button primary onClick={action('clicked')}>Primary button</Button>
  ))
  .add('Secondary button', () => (
    <Button onClick={action('clicked')}>Secondary button</Button>
  ))