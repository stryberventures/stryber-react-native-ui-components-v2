import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Multiselect from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';
import {isRTL} from '../Theme';
import {vocab} from '../../storybook/preview/i18n';

const options = [
  {label: vocab.components.multiselect.optionLabel1, value: 'one'},
  {label: vocab.components.multiselect.optionLabel2, value: 'two'},
  {label: vocab.components.multiselect.optionLabel3, value: 'three'},
  {label: vocab.components.multiselect.optionLabel4, value: 4},
  {label: vocab.components.multiselect.optionLabel5, value: 'five'},
  {label: vocab.components.multiselect.optionLabel6, value: 6},
];

export default {
  title: 'Components/MultiSelect/FloatingLabel',
  component: Multiselect,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  args: {
    color: 'primary',
    label: vocab.components.multiselect.label,
    placeholder: vocab.components.multiselect.placeholder,
    variant: 'floatingLabel',
    separator: isRTL ? '، ' : ', ',
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
        'rightContent',
        'dropdownStyle',
        'wrapperStyle',
        'maxValueLength',
        'currentValueLength',
        'showLength',
        'isFocused',
        'inputWrapperStyle',
        'leftContent',
      ],
    },
  },
} as ComponentMeta<typeof Multiselect>;

const Template: ComponentStory<typeof Multiselect> = args => (
  <Multiselect {...args} options={options} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const SlideUp = Template.bind({});
SlideUp.args = {
  slideUp: true,
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  withSearch: true,
  searchPlaceholder: vocab.components.multiselect.searchPlaceholder,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  error: vocab.components.multiselect.errorMessage,
};

export const Hint = Template.bind({});
Hint.args = {
  hint: vocab.components.multiselect.hintMessage,
};

export const WithSelectedOptions = Template.bind({});
WithSelectedOptions.args = {
  selectedValues: ['two', 4],
};
