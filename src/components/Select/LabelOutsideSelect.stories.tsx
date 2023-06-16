import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Select from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';
import {vocab} from '../../storybook/preview/i18n';

const options = [
  {label: vocab.components.select.optionLabel1, value: 1},
  {label: vocab.components.select.optionLabel2, value: 2},
  {label: vocab.components.select.optionLabel3, value: 3},
  {label: vocab.components.select.optionLabel4, value: 4},
  {label: vocab.components.select.optionLabel5, value: 5},
];

export default {
  title: 'Components/Select/LabelOutside',
  component: Select,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  args: {
    color: 'primary',
    label: vocab.components.select.label,
    placeholder: vocab.components.select.placeholder,
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
  label: vocab.components.select.hint,
  placeholder: vocab.components.select.hint,
  hint: vocab.components.select.hintMessage,
};

export const Error = Template.bind({});
Error.args = {
  label: vocab.components.select.error,
  placeholder: vocab.components.select.error,
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: vocab.components.select.disabled,
  placeholder: vocab.components.select.disabled,
  disabled: true,
};
