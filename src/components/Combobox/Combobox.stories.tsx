import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Combobox from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import pkg from './package.json';
import {ISelectOption} from '../Select';

const cities: ISelectOption[] = [
  {label: 'New York', value: 1},
  {label: 'Los Angeles', value: 2},
  {label: 'Chicago', value: 3},
  {label: 'Houston', value: 4},
  {label: 'Philadelphia', value: 5},
  {label: 'Phoenix', value: 6},
  {label: 'San Antonio', value: 7},
  {label: 'San Diego', value: 8},
  {label: 'Dallas', value: 9},
];

export default {
  title: 'Combobox',
  component: Combobox,
  decorators: Platform.OS === 'web' ? null : [CenterView],
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
  value: 9,
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
