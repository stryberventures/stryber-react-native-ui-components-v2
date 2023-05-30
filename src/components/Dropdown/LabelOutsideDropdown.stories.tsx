import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Dropdown from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import {Text} from 'react-native';
import pkg from './package.json';
import {vocab} from '../../storybook/preview/i18n';

const DropdownContent = () => (
  <Text selectable>{vocab.components.dropdown.content}</Text>
);

export default {
  title: 'Components/Dropdown/LabelOutside',
  component: Dropdown,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  args: {
    color: 'primary',
    label: vocab.components.dropdown.label,
    placeholder: vocab.components.dropdown.placeholder,
    value: vocab.components.dropdown.value,
    variant: 'labelOutside',
    children: <DropdownContent />,
  },
  parameters: {
    pkg,
    controls: {
      exclude: [
        'children',
        'dropdownStyle',
        'onChange',
        'style',
        'hintStyle',
        'errorStyle',
        'wrapperStyle',
        'leftContent',
        'rightContent',
        'maxValueLength',
        'currentValueLength',
        'showLength',
        'inputWrapperStyle',
        'isFocused',
      ],
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Hint = Template.bind({});
Hint.args = {
  label: vocab.components.dropdown.hint,
  hint: vocab.components.dropdown.hintMessage,
};

export const Error = Template.bind({});
Error.args = {
  label: vocab.components.dropdown.error,
  error: vocab.components.dropdown.errorMessage,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
