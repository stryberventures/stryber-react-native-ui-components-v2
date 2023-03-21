import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Dropdown from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import {Text} from 'react-native';
import pkg from './package.json';

const DropdownContent = () => (
  <Text selectable>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </Text>
);

export default {
  title: 'Components/Dropdown/FloatingLabel',
  component: Dropdown,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  args: {
    color: 'primary',
    label: 'Dropdown',
    placeholder: 'Placeholder',
    value: 'Text dropdown',
    variant: 'floatingLabel',
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
  label: 'Hint',
  hint: 'Hint message',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  error: 'Error message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
