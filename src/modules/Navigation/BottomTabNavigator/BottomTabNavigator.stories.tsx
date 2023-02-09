import React from 'react';
import {ComponentMeta} from '@storybook/react-native';
import BottomTabNavigator from './index';
import pkg from './package.json';
import {NavigationContainer} from '@react-navigation/native';
import {ComponentStory} from '@storybook/react';
import code from './BottomTabNavigatorCode';

export default {
  title: 'Modules/Navigation/BottomTabNavigator',
  component: BottomTabNavigator,
  decorators: [
    Story => (
      <NavigationContainer>
        <Story />
      </NavigationContainer>
    ),
  ],
  parameters: {
    pkg,
    previewTabs: {
      canvas: {hidden: true},
    },
    viewMode: 'docs',
  },
} as ComponentMeta<typeof BottomTabNavigator>;

const Template: ComponentStory<typeof BottomTabNavigator> = () => (
  <BottomTabNavigator />
);

export const BottomTab = Template.bind({});
BottomTab.parameters = {
  docs: {
    source: {
      code,
      state: 'open',
    },
  },
};
