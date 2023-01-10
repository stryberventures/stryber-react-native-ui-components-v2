import * as React from 'react';
import ComponentsSelector from './index';
import {ComponentMeta} from '@storybook/react-native';

export default {
  title: 'Core/ComponentsSelector',
  component: ComponentsSelector,
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {hidden: true},
      yarn: {hidden: true},
    },
    viewport: {
      disable: true,
    },
  },
} as ComponentMeta<typeof ComponentsSelector>;

export const Primary = () => <ComponentsSelector />;
