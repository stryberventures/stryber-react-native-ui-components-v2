import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Input from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Input',
  component: Input,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Email',
  placeholder: 'Email',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Email',
  placeholder: 'Email',
  color: 'secondary',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Email',
  placeholder: 'Email',
  value: 'example@test.com',
};

export const Hint = Template.bind({});
Hint.args = {
  label: 'Hint',
  placeholder: 'Hint',
  hint: 'Hint message',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  placeholder: 'Error',
  error: 'Error message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  placeholder: 'Disabled',
  disabled: true,
};

export const Mask = Template.bind({});
Mask.args = {
  label: 'Digit mask',
  mask: '+X(XXX) XX-XX-XXX',
  placeholder: '+X(XXX) XX-XX-XXX',
};

export const Prefix = Template.bind({});
Prefix.args = {
  label: 'Prefix',
  prefix: 'G-',
  mask: 'XXX-XXX',
  placeholder: 'XXX-XXX',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Read only',
  value: 'example@test.com',
  editable: false,
};
