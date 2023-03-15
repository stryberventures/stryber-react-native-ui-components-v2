import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import TextLink from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform, View} from 'react-native';
import * as Icons from '../Icons';
import pkg from './package.json';

export default {
  title: 'Components/TextLink',
  component: TextLink,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  parameters: {
    pkg,
    controls: {exclude: ['iconLeft', 'iconRight', 'style', 'textStyle']},
  },
  args: {
    children: 'Text link',
    color: 'primary',
    variant: 'body2',
    weight: 'regular',
    disabled: false,
    visited: false,
  },
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = args => (
  <View>
    <TextLink {...args} />
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
