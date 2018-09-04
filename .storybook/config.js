import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/elements.js');
  require('../stories/components.js');
  require('../stories/layouts.js');
}

configure(loadStories, module);
