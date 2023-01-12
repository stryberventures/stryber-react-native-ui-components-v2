import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import TextLink from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, View} from 'react-native';
import * as Icons from '../Icons';
import pkg from './package.json';
import Divider from '../../storybook/preview/Divider';

export default {
  title: 'TextLink',
  component: TextLink,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
    controls: {exclude: ['iconLeft', 'iconRight', 'style', 'textStyle']},
  },
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = args => (
  <View>
    <TextLink variant="body1" {...args}>
      Body1
    </TextLink>
    <Divider />
    <TextLink variant="body2" {...args}>
      Body2
    </TextLink>
    <Divider />
    <TextLink variant="body3" {...args}>
      Body3
    </TextLink>
  </View>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  iconRight: Icons.LoadIcon,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  iconRight: Icons.LoadIcon,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  iconLeft: Icons.LoadIcon,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  iconRight: Icons.LoadIcon,
};

export const Visited = Template.bind({});
Visited.args = {
  visited: true,
  iconRight: Icons.LoadIcon,
};
