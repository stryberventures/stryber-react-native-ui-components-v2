import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Chip from '.';
import CenterView from '../../storybook/preview/CenterView';
import {ArrowDownSmallIcon, CheckIcon} from '../Icons';

export default {
  title: 'Chip',
  component: Chip,
  decorators: [CenterView],
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = args => <Chip {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  children: 'Contained',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  color: 'secondary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'Outlined',
  variant: 'outlined',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};

export const DisabledOutlined = Template.bind({});
DisabledOutlined.args = {
  children: 'Disabled',
  disabled: true,
  variant: 'outlined',
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  children: 'Icons',
  iconRight: <ArrowDownSmallIcon style={{marginHorizontal: 3}} />,
  iconLeft: <CheckIcon style={{marginHorizontal: 2}} />,
};
