import React from 'react';
import { storiesOf } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import '../src/index.css';

addDecorator((story, context) => withInfo('common info')(story)(context));

