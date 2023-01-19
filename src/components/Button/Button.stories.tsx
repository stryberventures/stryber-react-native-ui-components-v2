import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Button from '.';
import * as Icons from '../Icons';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, View, ViewStyle} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
    controls: {
      exclude: [
        'iconLeft',
        'iconRight',
        'icon',
        'style',
        'textStyle',
        'onPress',
      ],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  children: 'Primary',
  color: 'primary',
  size: 'medium',
  shape: 'round',
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Outlined',
  variant: 'outlined',
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Ghost',
  variant: 'ghost',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  color: 'secondary',
};

export const Mini = Template.bind({});
Mini.args = {
  children: 'Mini',
  size: 'mini',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large',
  size: 'large',
};

export const Circle = Template.bind({});
Circle.args = {
  children: 'Circle',
  shape: 'circle',
};

export const Flat = Template.bind({});
Flat.args = {
  children: 'Flat',
  shape: 'flat',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: 'Left Icon',
  iconLeft: Icons.InfoIcon,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  children: 'Right Icon',
  iconRight: Icons.InfoIcon,
};

export const LeftRightIcons = Template.bind({});
LeftRightIcons.args = {
  children: 'Left and Right Icons',
  iconLeft: Icons.InfoIcon,
  iconRight: Icons.InfoIcon,
};

export const Error = Template.bind({});
Error.args = {
  children: 'Error',
  color: 'error',
};

export const Icon = Template.bind({});
Icon.args = {
  icon: Icons.InfoIcon,
  size: 'small',
  variant: 'contained',
};

const alignFlexStart: ViewStyle = {alignItems: 'flex-start'};
Icon.decorators = [
  Story => (
    <View style={alignFlexStart}>
      <Story />
    </View>
  ),
];

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};
