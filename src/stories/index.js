import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../index.css'

import Button from '../components/Button/component'

storiesOf('Button', module)
  .add('Primary color', () => <Button primary onClick={action('clicked')}>Primary color</Button>)
  .add('Secondary color', () => <Button onClick={action('clicked')}>Secondary color</Button>)
