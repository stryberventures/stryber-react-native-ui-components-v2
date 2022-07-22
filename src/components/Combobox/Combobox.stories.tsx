import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Combobox from '.';
import CenterView from '../../storybook/preview/CenterView';
import pkg from './package.json';
import {ISelectOption} from '../Select';

const cities: ISelectOption[] = [
  {label: 'New York', value: 'New York'},
  {label: 'Los Angeles', value: 'Los Angeles'},
  {label: 'Chicago', value: 'Chicago'},
  {label: 'Houston', value: 'Houston'},
  {label: 'Philadelphia', value: 'Philadelphia'},
  {label: 'Phoenix', value: 'Phoenix'},
  {label: 'San Antonio', value: 'San Antonio'},
  {label: 'San Diego', value: 'San Diego'},
  {label: 'Dallas', value: 'Dallas'},
];

export default {
  title: 'Combobox',
  component: Combobox,
  decorators: [CenterView],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Combobox>;

const Template: ComponentStory<typeof Combobox> = ({options: _, ...args}) => (
  <Combobox options={cities} {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'City',
  placeholder: 'Chose a city',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'City',
  placeholder: 'Chose a city',
  color: 'secondary',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'City',
  placeholder: 'Chose a city',
  value: 'Dallas',
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
