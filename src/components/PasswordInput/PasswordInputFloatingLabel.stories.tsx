import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import PasswordInput from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';
import DismissKeyboardDecorator from '../../storybook/preview/DismissKeyboardDecorator';

export default {
  title: 'Components/PasswordInput/FloatingLabel',
  component: PasswordInput,
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
        'newPassword',
        'validationSchema',
        'onValidationChange',
        'validationContainerStyle',
        'chipStyle',
        'name',
        'inputStyle',
        'hintStyle',
        'errorStyle',
        'rightContent',
        'mask',
        'prefixStyle',
        'showLength',
        'clearFormValueOnUnmount',
        'style',
        'inputWrapperStyle',
        'controlled',
      ],
    },
  },
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = args => (
  <PasswordInput label="Password" placeholder="Enter password" {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Hint = Template.bind({});
Hint.args = {
  hint: 'Hint message',
};

export const Error = Template.bind({});
Error.args = {
  error: 'Error message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
