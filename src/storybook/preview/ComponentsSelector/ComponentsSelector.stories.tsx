import * as React from 'react';
import Selector from './index';
import {ComponentMeta} from '@storybook/react-native';

export default {
  title: 'Core/Components Selector',
  component: Selector,
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {hidden: true},
      yarn: {hidden: true},
    },
    viewport: {
      disable: true,
    },
  },
} as ComponentMeta<typeof Selector>;

export const ComponentsSelector = () => <Selector />;
