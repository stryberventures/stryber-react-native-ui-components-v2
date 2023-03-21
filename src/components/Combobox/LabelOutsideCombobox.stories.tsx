import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Combobox from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
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
  title: 'Components/Combobox/LabelOutside',
  component: Combobox,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  args: {
    color: 'primary',
    label: 'City',
    placeholder: 'Chose a city',
    variant: 'labelOutside',
    noOptionsFoundText: 'No cities found',
  },
  argTypes: {
    error: {control: 'text'},
  },
  parameters: {
    pkg,
    controls: {
      exclude: [
        'options',
        'dropdownStyle',
        'inputStyle',
        'onChange',
        'value',
        'style',
        'name',
        'clearFormValueOnUnmount',
        'controlled',
        'inputWrapperStyle',
        'hintStyle',
        'errorStyle',
        'rightContent',
        'leftContent',
        'prefix',
        'postfix',
        'postfixStyle',
        'mask',
        'prefixStyle',
        'showLength',
        'withRemoveButton',
        'onRemove',
      ],
    },
  },
} as ComponentMeta<typeof Combobox>;

const Template: ComponentStory<typeof Combobox> = ({options: _, ...args}) => (
  <Combobox options={cities} {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const WithValue = Template.bind({});
WithValue.args = {
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
