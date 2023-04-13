import React from 'react';
import {ComponentMeta} from '@storybook/react-native';
import SideNavigatorSmallComponent from './SideNavigatorSmall';
import SideNavigatorMediumComponent from './SideNavigatorMedium';
import pkg from './package.json';
import {NavigationContainer} from '@react-navigation/native';
import {ComponentStory} from '@storybook/react';
import codeSmall from './SideNavigatorSmall/code';
import codeMedium from './SideNavigatorMedium/code';
import {Platform} from 'react-native';

export default {
  title: 'Modules/Navigation/SideNavigator',
  component: SideNavigatorSmallComponent,
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
} as ComponentMeta<typeof SideNavigatorSmallComponent>;

const SmallTemplate: ComponentStory<
  typeof SideNavigatorSmallComponent
> = () => {
  if (Platform.OS === 'web') {
    return (
      <img
        width="300"
        alt="SideNavigatorSmall"
        src="/component_preview/left-navigator-small.gif"
      />
    );
  }
  return <SideNavigatorSmallComponent />;
};

const MediumTemplate: ComponentStory<
  typeof SideNavigatorMediumComponent
> = () => {
  if (Platform.OS === 'web') {
    return (
      <img
        width="300"
        alt="SideNavigatorMedium"
        src="/component_preview/left-navigator-medium.gif"
      />
    );
  }
  return <SideNavigatorMediumComponent />;
};

export const SideNavigatorSmall = SmallTemplate.bind({});
SideNavigatorSmall.parameters = {
  docs: {
    source: {
      code: codeSmall,
      state: 'open',
    },
  },
};

export const SideNavigatorMedium = MediumTemplate.bind({});
SideNavigatorMedium.parameters = {
  docs: {
    source: {
      code: codeMedium,
      state: 'open',
    },
  },
};
