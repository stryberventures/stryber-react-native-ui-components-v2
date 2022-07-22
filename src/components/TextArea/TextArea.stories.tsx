import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import TextArea from '.';
import CenterView from '../../storybook/preview/CenterView';
import pkg from './package.json';

export default {
  title: 'TextArea',
  component: TextArea,
  decorators: [CenterView],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = args => (
  <TextArea {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Your message',
  placeholder: 'Your message',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Your message',
  placeholder: 'Your message',
  color: 'secondary',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Your message',
  placeholder: 'Your message',
  value: 'Lorem ipsum',
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

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  label: 'Max Length',
  placeholder: 'Max Length TextArea',
  maxLength: 200,
};
