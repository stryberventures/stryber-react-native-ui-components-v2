import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Select from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import pkg from './package.json';

const options = [
  {label: 'Option 1', value: 1},
  {label: 'Option 2', value: 2},
];

export default {
  title: 'Select',
  component: Select,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({options: _, ...args}) => (
  <Select options={options} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Select',
  placeholder: 'Select an option',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Select',
  placeholder: 'Select an option',
  color: 'secondary',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Select',
  placeholder: 'Select an option',
  selectedOption: 1,
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
