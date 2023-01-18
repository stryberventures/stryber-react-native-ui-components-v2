import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Chip from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import {CheckIconDeprecated} from '../Icons';
import pkg from './package.json';

export default {
  title: 'Chip',
  component: Chip,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
    controls: {
      exclude: ['iconLeft', 'iconRight', 'style', 'textStyle'],
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = ({children, ...args}) => (
  <Chip {...args}>{children}</Chip>
);

export const Contained = Template.bind({});
Contained.args = {
  children: 'Contained',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  color: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success',
  color: 'success',
};

export const Grey = Template.bind({});
Grey.args = {
  children: 'Grey',
  color: 'neutralGray',
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

const iconMargin = {marginHorizontal: 2};

export const WithIcons = Template.bind({});
WithIcons.args = {
  children: 'Icons',
  iconRight: <CheckIconDeprecated style={iconMargin} />,
  iconLeft: <CheckIconDeprecated style={iconMargin} />,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: 'LeftIcon',
  iconLeft: <CheckIconDeprecated style={iconMargin} />,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  children: 'RightIcon',
  iconRight: <CheckIconDeprecated style={iconMargin} />,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  iconLeft: <CheckIconDeprecated style={iconMargin} />,
};
