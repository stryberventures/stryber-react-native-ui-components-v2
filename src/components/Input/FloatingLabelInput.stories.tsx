import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Input from '.';
import * as Icons from '../Icons';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';
import DismissKeyboardDecorator from '../../storybook/preview/DismissKeyboardDecorator';
import {vocab} from '../../storybook/preview/i18n';

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
  label: vocab.components.input.email,
  placeholder: vocab.components.input.email,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: vocab.components.input.email,
  placeholder: vocab.components.input.email,
  color: 'secondary',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: vocab.components.input.email,
  placeholder: vocab.components.input.email,
  value: 'example@test.com',
};

export const Hint = Template.bind({});
Hint.args = {
  label: vocab.components.input.hint,
  placeholder: vocab.components.input.hint,
  hint: vocab.components.input.hintMessage,
};

export const Error = Template.bind({});
Error.args = {
  label: vocab.components.input.error,
  placeholder: vocab.components.input.error,
  error: vocab.components.input.errorMessage,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: vocab.components.input.disabled,
  placeholder: vocab.components.input.disabled,
  hint: vocab.components.input.testHint,
  disabled: true,
};

export const Mask = Template.bind({});
Mask.args = {
  label: vocab.components.input.digitMask,
  mask: '+X(XXX) XX-XX-XXX',
  placeholder: '+X(XXX) XX-XX-XXX',
};

export const Prefix = Template.bind({});
Prefix.args = {
  label: vocab.components.input.prefix,
  prefix: 'G-',
  mask: 'XXX-XXX',
  placeholder: 'XXX-XXX',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: vocab.components.input.readOnly,
  value: 'example@test.com',
  editable: false,
};

export const LeftContent = Template.bind({});
LeftContent.args = {
  label: vocab.components.input.leftIcon,
  leftContent: <Icons.CreditCardIcon />,
};

export const RightContent = Template.bind({});
RightContent.args = {
  label: vocab.components.input.rightIcon,
  rightContent: <Icons.InfoIcon />,
};

export const RightAndLeftContent = Template.bind({});
RightAndLeftContent.args = {
  label: vocab.components.input.withIcons,
  leftContent: <Icons.CreditCardIcon />,
  rightContent: <Icons.InfoIcon />,
};

export const WithRemoveButton = Template.bind({});
WithRemoveButton.args = {
  label: vocab.components.input.withRemoveButton,
  value: vocab.components.input.testValue,
  withRemoveButton: true,
};
