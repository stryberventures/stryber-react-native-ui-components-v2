import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Combobox from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';
import {ISelectOption} from '../Select';
import {vocab} from '../../storybook/preview/i18n';

const cities: ISelectOption[] = [
  {label: vocab.components.combobox.optionLabel1, value: 1},
  {label: vocab.components.combobox.optionLabel2, value: 2},
  {label: vocab.components.combobox.optionLabel3, value: 3},
  {label: vocab.components.combobox.optionLabel4, value: 4},
  {label: vocab.components.combobox.optionLabel5, value: 5},
  {label: vocab.components.combobox.optionLabel6, value: 6},
  {label: vocab.components.combobox.optionLabel7, value: 7},
  {label: vocab.components.combobox.optionLabel8, value: 8},
  {label: vocab.components.combobox.optionLabel9, value: 9},
];

export default {
  title: 'Components/Combobox/FloatingLabel',
  component: Combobox,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  args: {
    color: 'primary',
    label: vocab.components.combobox.label,
    placeholder: vocab.components.combobox.placeholder,
    variant: 'floatingLabel',
    noOptionsFoundText: vocab.components.combobox.noOptionsFoundText,
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
  label: vocab.components.combobox.hint,
  placeholder: vocab.components.combobox.hint,
  hint: vocab.components.combobox.hintMessage,
};

export const Error = Template.bind({});
Error.args = {
  label: vocab.components.combobox.error,
  placeholder: vocab.components.combobox.error,
  error: vocab.components.combobox.errorMessage,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: vocab.components.combobox.disabled,
  placeholder: vocab.components.combobox.disabled,
  disabled: true,
};
