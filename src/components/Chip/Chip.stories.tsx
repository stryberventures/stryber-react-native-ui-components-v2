import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Chip from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import {CheckIcon} from '../Icons';
import pkg from './package.json';
import {vocab} from '../../storybook/preview/i18n';

export default {
  title: 'Components/Chip',
  component: Chip,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
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
  children: vocab.components.chip.contained,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: vocab.components.chip.secondary,
  color: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  children: vocab.components.chip.success,
  color: 'success',
};

export const Grey = Template.bind({});
Grey.args = {
  children: vocab.components.chip.grey,
  color: 'neutralGray',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: vocab.components.chip.outlined,
  variant: 'outlined',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: vocab.components.chip.disabled,
  disabled: true,
};

export const DisabledOutlined = Template.bind({});
DisabledOutlined.args = {
  children: vocab.components.chip.disabled,
  disabled: true,
  variant: 'outlined',
};

const iconMargin = {marginHorizontal: 2};

export const WithIcons = Template.bind({});
WithIcons.args = {
  children: vocab.components.chip.icons,
  iconRight: <CheckIcon style={iconMargin} />,
  iconLeft: <CheckIcon style={iconMargin} />,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: vocab.components.chip.leftIcon,
  iconLeft: <CheckIcon style={iconMargin} />,
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  children: vocab.components.chip.rightIcon,
  iconRight: <CheckIcon style={iconMargin} />,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  iconLeft: <CheckIcon style={iconMargin} />,
};
