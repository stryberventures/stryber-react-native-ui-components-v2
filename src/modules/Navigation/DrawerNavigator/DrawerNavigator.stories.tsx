import React from 'react';
import {ComponentMeta} from '@storybook/react-native';
import DrawerNavigator from './index';
import pkg from './package.json';
import {NavigationContainer} from '@react-navigation/native';
import {ComponentStory} from '@storybook/react';
import code from './DrawerNavigatorCode';
import {Platform} from 'react-native';

export default {
  title: 'Modules/Navigation/DrawerNavigator',
  component: DrawerNavigator,
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
} as ComponentMeta<typeof DrawerNavigator>;

const Template: ComponentStory<typeof DrawerNavigator> = () => {
  if (Platform.OS === 'web') {
    return (
      <img
        alt="DrawerNavigator"
        src="/component_preview/drawer_navigator.gif"
      />
    );
  }
  return <DrawerNavigator />;
};

export const Drawer = Template.bind({});
Drawer.parameters = {
  docs: {
    source: {
      code,
      state: 'open',
    },
  },
};
