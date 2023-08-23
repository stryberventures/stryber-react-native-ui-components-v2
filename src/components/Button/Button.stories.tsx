import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Button from '.';
import * as Icons from '../Icons';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform, View, ViewStyle} from 'react-native';
import pkg from './package.json';
import {vocab} from '../../storybook/preview/i18n';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
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
  children: vocab.components.button.primary,
  color: 'primary',
  size: 'medium',
  shape: 'round',
  variant: 'contained',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: vocab.components.button.outlined,
  variant: 'outlined',
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: vocab.components.button.ghost,
  variant: 'ghost',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: vocab.components.button.secondary,
  color: 'secondary',
};

export const Mini = Template.bind({});
Mini.args = {
  children: vocab.components.button.mini,
  size: 'mini',
};

export const Small = Template.bind({});
Small.args = {
  children: vocab.components.button.small,
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  children: vocab.components.button.large,
  size: 'large',
};

export const Circle = Template.bind({});
Circle.args = {
  children: vocab.components.button.circle,
  shape: 'circle',
};

export const Flat = Template.bind({});
Flat.args = {
  children: vocab.components.button.flat,
  shape: 'flat',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: vocab.components.button.leftIcon,
  iconLeft: Icons.InfoIcon,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  children: vocab.components.button.rightIcon,
  iconRight: Icons.InfoIcon,
};

export const LeftRightIcons = Template.bind({});
LeftRightIcons.args = {
  children: vocab.components.button.leftRightIcons,
  iconLeft: Icons.InfoIcon,
  iconRight: Icons.InfoIcon,
};

export const Error = Template.bind({});
Error.args = {
  children: vocab.components.button.error,
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
  children: vocab.components.button.disabled,
  disabled: true,
};
