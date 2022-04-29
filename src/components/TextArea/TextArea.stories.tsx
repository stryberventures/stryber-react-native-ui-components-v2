import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import TextArea from '.';
import CenterView from '../../storybook/preview/CenterView';

export default {
  title: 'TextArea',
  component: TextArea,
  decorators: [CenterView],
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = args => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Your message',
  placeholder: 'Your message',
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
