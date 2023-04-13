import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Select from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';

const options = [
  {label: 'Option 1', value: 1},
  {label: 'Option 2', value: 2},
];

export default {
  title: 'Components/Select/LabelOutside',
  component: Select,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  args: {
    color: 'primary',
    label: 'Select',
    placeholder: 'Select an option',
    variant: 'labelOutside',
  },
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
        'leftContent',
        'rightContent',
        'dropdownStyle',
        'wrapperStyle',
        'maxValueLength',
        'currentValueLength',
        'showLength',
        'selectedOption',
        'isFocused',
        'inputWrapperStyle',
      ],
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = ({options: _, ...args}) => (
  <Select options={options} {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const WithValue = Template.bind({});
WithValue.args = {
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
