import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import PasswordInput from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
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

export const Validation = Template.bind({});
Validation.args = {
  label: 'Input password',
  placeholder: 'Enter password',
  value: 'something',
  onValidationChange: valid => {
    console.log('valid', valid);
  },
  validationSchema: [
    {
      label: 'Number',
      rule: /(?=.*\d).{1,}/gm,
    },
    {
      label: 'Uppercase',
      rule: /(?=[A-Z]).{1,}$/gm,
    },
    {
      label: 'Lowercase',
      rule: /(?=[a-z]).{1,}$/gm,
    },
  ],
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
