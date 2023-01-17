import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Dropdown from '.';
import CenterView from '../../storybook/preview/CenterView';
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
  title: 'Dropdown',
  component: Dropdown,
  decorators: Platform.OS === 'web' ? null : [CenterView],
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
        'rightContent',
        'maxValueLength',
        'currentValueLength',
        'showLength',
      ],
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => (
  <Dropdown {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Text',
  value: 'Text dropdown',
  children: <DropdownContent />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Text',
  value: 'Text dropdown',
  children: <DropdownContent />,
  color: 'secondary',
};

export const Hint = Template.bind({});
Hint.args = {
  label: 'Hint',
  value: 'Text dropdown',
  children: <DropdownContent />,
  hint: 'Hint message',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  value: 'Text dropdown',
  children: <DropdownContent />,
  error: 'Error message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Text',
  value: 'Text dropdown',
  children: <DropdownContent />,
  disabled: true,
};
