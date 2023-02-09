import React from 'react';
import {ComponentMeta} from '@storybook/react-native';
import TopTabNavigator from './index';
import TopTabNavigatorLeftIcon from './TopTabNavigatorLeftIcon';
import TopTabNavigatorRightIcon from './TopTabNavigatorRightIcon';
import TopTabNavigatorIosStyle from './TopTabNavigatorIosStyle';
import pkg from './package.json';
import {NavigationContainer} from '@react-navigation/native';
import {ComponentStory} from '@storybook/react';
import code from './TopTabNavigatorCode';
import leftIconCode from './TopTabNavigatorLeftIcon/TopTabNavigatorLeftIconCode';
import rightIconCode from './TopTabNavigatorRightIcon/TopTabNavigatorRightIconCode';
import iosStyleCode from './TopTabNavigatorIosStyle/TopTabNavigatorIosStyleCode';

export default {
  title: 'Modules/Navigation/TopTabNavigator',
  component: TopTabNavigator,
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
} as ComponentMeta<typeof TopTabNavigator>;

const TopTabNavigatorTemplate: ComponentStory<typeof TopTabNavigator> = () => (
  <TopTabNavigator />
);

export const TopTab = TopTabNavigatorTemplate.bind({});
TopTab.parameters = {
  docs: {
    source: {
      code,
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
