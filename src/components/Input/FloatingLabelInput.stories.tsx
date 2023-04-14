import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Input from '.';
import * as Icons from '../Icons';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';
import DismissKeyboardDecorator from '../../storybook/preview/DismissKeyboardDecorator';

export default {
  title: 'Components/Input/FloatingLabel',
  component: Input,
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
        'style',
        'inputWrapperStyle',
        'inputStyle',
        'hintStyle',
        'errorStyle',
        'leftContent',
        'rightContent',
        'mask',
        'prefixStyle',
        'showLength',
        'controlled',
        'size',
        'postfixStyle',
        'onRemove',
      ],
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Email',
  placeholder: 'Email',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Email',
  placeholder: 'Email',
  color: 'secondary',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Email',
  placeholder: 'Email',
  value: 'example@test.com',
};

export const Hint = Template.bind({});
Hint.args = {
  label: 'Hint',
  placeholder: 'Hint',
  hint: 'Hint message',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  placeholder: 'Error',
  error: 'Error message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  placeholder: 'Disabled',
  hint: 'Test hint',
  disabled: true,
};

export const Mask = Template.bind({});
Mask.args = {
  label: 'Digit mask',
  mask: '+X(XXX) XX-XX-XXX',
  placeholder: '+X(XXX) XX-XX-XXX',
};

export const Prefix = Template.bind({});
Prefix.args = {
  label: 'Prefix',
  prefix: 'G-',
  mask: 'XXX-XXX',
  placeholder: 'XXX-XXX',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Read only',
  value: 'example@test.com',
  editable: false,
};

export const LeftContent = Template.bind({});
LeftContent.args = {
  label: 'Left icon',
  leftContent: <Icons.CreditCardIcon />,
};

export const RightContent = Template.bind({});
RightContent.args = {
  label: 'Right icon',
  rightContent: <Icons.InfoIcon />,
};

export const RightAndLeftContent = Template.bind({});
RightAndLeftContent.args = {
  label: 'With icons',
  leftContent: <Icons.CreditCardIcon />,
  rightContent: <Icons.InfoIcon />,
};

export const WithRemoveButton = Template.bind({});
WithRemoveButton.args = {
  label: 'With remove button',
  value: 'Test value',
  withRemoveButton: true,
};
