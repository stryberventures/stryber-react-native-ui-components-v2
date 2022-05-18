import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import TextLink from '.';
import CenterView from '../../storybook/preview/CenterView';
import {ArrowRightIcon} from '../Icons';

export default {
  title: 'TextLink',
  component: TextLink,
  decorators: [CenterView],
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

export const Icon = Template.bind({});
Icon.args = {
  children: 'Text link',
  iconRight: <ArrowRightIcon />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Text link',
  disabled: true,
};
