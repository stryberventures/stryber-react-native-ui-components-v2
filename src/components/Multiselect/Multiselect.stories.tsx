import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Multiselect from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import pkg from './package.json';

const options = [
  {label: 'One', value: 'one'},
  {label: 'Two', value: 'two'},
  {label: 'Three for length testing', value: 'three'},
  {label: 'Four', value: 4},
  {label: 'Five', value: 'five'},
  {label: 'Six', value: 6},
];

export default {
  title: 'Components/MultiSelect',
  component: Multiselect,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
    controls: {
      exclude: [
        'name',
        'options',
        'selectedOptions',
        'clearFormValueOnUnmount',
        'onChange',
        'onDropdownChange',
        'style',
        'hintStyle',
        'errorStyle',
        'rightContent',
        'dropdownStyle',
        'wrapperStyle',
        'maxValueLength',
        'currentValueLength',
        'showLength',
      ],
    },
  },
} as ComponentMeta<typeof Multiselect>;

const Template: ComponentStory<typeof Multiselect> = args => (
  <Multiselect
    {...args}
    options={options}
    label="Multiselect"
    placeholder="Multiselect"
  />
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  error: 'Error message',
};

export const Hint = Template.bind({});
Hint.args = {
  hint: 'Hint message',
};

export const WithSelectedOptions = Template.bind({});
WithSelectedOptions.args = {
  selectedOptions: ['two', 4],
};
