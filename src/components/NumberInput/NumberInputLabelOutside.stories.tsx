import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import NumberInput from '.';
import Text from '../Text';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';
import DismissKeyboardDecorator from '../../storybook/preview/DismissKeyboardDecorator';

export default {
  title: 'Components/NumberInput/LabelOutside',
  component: NumberInput,
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
        'onChange',
        'style',
        'name',
        'clearFormValueOnUnmount',
        'controlled',
        'inputWrapperStyle',
        'inputStyle',
        'hintStyle',
        'errorStyle',
        'rightContent',
        'mask',
        'prefixStyle',
        'showLength',
      ],
    },
  },
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = args => (
  <NumberInput variant="labelOutside" {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Number',
  placeholder: 'Number Value',
  step: 1,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Number',
  placeholder: 'Number Value',
  step: 1,
  color: 'secondary',
};

export const CustomStep = Template.bind({});
CustomStep.args = {
  label: 'Number',
  placeholder: 'Number Value',
  step: 5,
};

export const WithMinAndMax = Template.bind({});
WithMinAndMax.args = {
  label: 'Number',
  placeholder: 'Number Value',
  max: 30,
  min: 22,
};

export const WithoutQuantityCounter = Template.bind({});
WithoutQuantityCounter.args = {
  label: 'Number',
  placeholder: 'Number Value',
  withQuantityCounter: false,
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Number',
  placeholder: 'Number Value',
  error: 'This is an error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Number',
  placeholder: 'Number Value',
  disabled: true,
};

export const WithHint = Template.bind({});
WithHint.args = {
  label: 'Number',
  placeholder: 'Number Value',
  hint: 'This is a hint',
};

export const LeftContent = Template.bind({});
LeftContent.args = {
  label: 'Number',
  placeholder: 'Number Value',
  leftContent: (
    <Text variant="components1" color="secondary">
      $
    </Text>
  ),
};

export const RightContent = Template.bind({});
RightContent.args = {
  label: 'Number',
  placeholder: 'Number Value',
  rightContent: (
    <Text variant="components1" color="secondary">
      AED
    </Text>
  ),
};
