import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Input from '.';
import CenterView from '../../storybook/preview/CenterView';

export default {
  title: 'Input',
  component: Input,
  decorators: [CenterView],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  placeholder: 'Email',
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
