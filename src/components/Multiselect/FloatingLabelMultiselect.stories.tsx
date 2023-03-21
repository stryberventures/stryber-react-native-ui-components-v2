import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Multiselect from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
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
  title: 'Components/MultiSelect/FloatingLabel',
  component: Multiselect,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  args: {
    color: 'primary',
    label: 'Multiselect',
    placeholder: 'Select multiple options',
    variant: 'floatingLabel',
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
