import React from 'react';
import {ComponentMeta} from '@storybook/react-native';
import TopTabNavigatorSmall from './TopTabNavigatorSmall';
import TopTabNavigatorMedium from './TopTabNavigatorMedium';
import TopTabNavigatorLeftIcon from './TopTabNavigatorLeftIcon';
import TopTabNavigatorRightIcon from './TopTabNavigatorRightIcon';
import TopTabNavigatorIosStyle from './TopTabNavigatorIosStyle';
import pkg from './package.json';
import {NavigationContainer} from '@react-navigation/native';
import {ComponentStory} from '@storybook/react';
import smallCode from './TopTabNavigatorSmall/TopTabNavigatorSmallCode';
import mediumCode from './TopTabNavigatorMedium/TopTabNavigatorMediumCode';
import leftIconCode from './TopTabNavigatorLeftIcon/TopTabNavigatorLeftIconCode';
import rightIconCode from './TopTabNavigatorRightIcon/TopTabNavigatorRightIconCode';
import iosStyleCode from './TopTabNavigatorIosStyle/TopTabNavigatorIosStyleCode';

export default {
  title: 'Modules/Navigation/TopTabNavigator',
  component: TopTabNavigatorSmall,
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
} as ComponentMeta<typeof TopTabNavigatorSmall>;

const TopTabNavigatorSmallTemplate: ComponentStory<
  typeof TopTabNavigatorSmall
> = () => <TopTabNavigatorSmall />;

export const TopTabSmall = TopTabNavigatorSmallTemplate.bind({});
TopTabSmall.parameters = {
  docs: {
    source: {
      code: smallCode,
      state: 'open',
    },
  },
};

const TopTabNavigatorMediumTemplate: ComponentStory<
  typeof TopTabNavigatorMedium
> = () => <TopTabNavigatorMedium />;

export const TopTabMedium = TopTabNavigatorMediumTemplate.bind({});
TopTabMedium.parameters = {
  docs: {
    source: {
      code: mediumCode,
      state: 'open',
    },
  },
};

const TopTabNavigatorLeftIconTemplate: ComponentStory<
  typeof TopTabNavigatorLeftIcon
> = () => <TopTabNavigatorLeftIcon />;

export const TopTabLeftIcon = TopTabNavigatorLeftIconTemplate.bind({});
TopTabLeftIcon.parameters = {
  docs: {
    source: {
      code: leftIconCode,
      state: 'open',
    },
  },
};

const TopTabNavigatorRightIconTemplate: ComponentStory<
  typeof TopTabNavigatorLeftIcon
> = () => <TopTabNavigatorRightIcon />;

export const TopTabRightIcon = TopTabNavigatorRightIconTemplate.bind({});
TopTabRightIcon.parameters = {
  docs: {
    source: {
      code: rightIconCode,
      state: 'open',
    },
  },
};

const TopTabNavigatorIosStyleTemplate: ComponentStory<
  typeof TopTabNavigatorIosStyle
> = () => <TopTabNavigatorIosStyle />;
export const TopTabIosStyle = TopTabNavigatorIosStyleTemplate.bind({});
TopTabIosStyle.parameters = {
  docs: {
    source: {
      code: iosStyleCode,
      state: 'open',
    },
  },
};
