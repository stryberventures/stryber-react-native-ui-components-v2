import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import SearchInput from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';
import DismissKeyboardDecorator from '../../storybook/preview/DismissKeyboardDecorator';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  decorators:
    Platform.OS === 'web'
      ? null
      : [CenterViewDecorator, DismissKeyboardDecorator],
  argTypes: {
    error: {control: 'text'},
  },
  parameters: {
    pkg,
    controls: {
      exclude: [
        'name',
        'clearFormValueOnUnmount',
        'mask',
        'prefixStyle',
        'rightContent',
        'controlled',
        'errorStyle',
        'hintStyle',
        'inputStyle',
        'inputWrapperStyle',
        'style',
      ],
    },
  },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = args => (
  <SearchInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Your message',
};

export const Secondary = Template.bind({});
Secondary.args = {
  placeholder: 'Your message',
  color: 'secondary',
};

export const WithValue = Template.bind({});
WithValue.args = {
  placeholder: 'Your message',
  value: 'Lorem ipsum',
};

export const Hint = Template.bind({});
Hint.args = {
  placeholder: 'Hint',
  hint: 'Hint message',
};

export const Error = Template.bind({});
Error.args = {
  placeholder: 'Error',
  error: 'Error message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled',
  disabled: true,
};
