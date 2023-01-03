import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import TextLink from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import {ArrowRightIconDeprecated} from '../Icons';
import pkg from './package.json';

export default {
  title: 'TextLink',
  component: TextLink,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof TextLink>;

const Template: ComponentStory<typeof TextLink> = args => (
  <TextLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text link',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Text link',
  color: 'secondary',
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  children: 'Text link',
  iconRight: <ArrowRightIconDeprecated />,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: 'Text link',
  iconLeft: (
    <ArrowRightIconDeprecated style={{transform: [{rotate: '180deg'}]}} />
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text link',
  disabled: true,
};
