import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Button from '.';
import {View} from 'react-native';
import * as Icons from '../Icons';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: {action: 'pressed the button'},
  },
  decorators: [
    Story => (
      <View
        style={{
          justifyContent: 'center',
          height: '100%',
          paddingHorizontal: 20,
        }}
      >
        <Story />
      </View>
    ),
  ],
  args: {
    children: 'Button',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  color: 'primary',
  size: 'medium',
  shape: 'round',
  type: 'contained',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  color: 'secondary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Outlined',
  type: 'outlined',
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
  leftIcon: <Icons.InfoIcon />,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  rightIcon: <Icons.InfoIcon />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};