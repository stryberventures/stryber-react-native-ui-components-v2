import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import PasswordInput from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';
import DismissKeyboardDecorator from '../../storybook/preview/DismissKeyboardDecorator';
import {vocab} from '../../storybook/preview/i18n';

export default {
  title: 'Components/PasswordInput/LabelOutside',
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
  <PasswordInput
    variant="labelOutside"
    label={vocab.components.passwordInput.label}
    placeholder={vocab.components.passwordInput.placeholder}
    {...args}
  />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Hint = Template.bind({});
Hint.args = {
  hint: vocab.components.passwordInput.hint,
};

export const Error = Template.bind({});
Error.args = {
  error: vocab.components.passwordInput.error,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
