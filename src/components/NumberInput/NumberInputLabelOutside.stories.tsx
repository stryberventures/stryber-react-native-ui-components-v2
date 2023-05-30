import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import NumberInput from '.';
import Text from '../Text';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';
import DismissKeyboardDecorator from '../../storybook/preview/DismissKeyboardDecorator';
import {vocab} from '../../storybook/preview/i18n';

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
  label: vocab.components.numberInput.number,
  placeholder: vocab.components.numberInput.numberValue,
  step: 1,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: vocab.components.numberInput.number,
  placeholder: vocab.components.numberInput.numberValue,
  step: 1,
  color: 'secondary',
};

export const CustomStep = Template.bind({});
CustomStep.args = {
  label: vocab.components.numberInput.number,
  placeholder: vocab.components.numberInput.numberValue,
  step: 5,
};

export const WithMinAndMax = Template.bind({});
WithMinAndMax.args = {
  label: vocab.components.numberInput.number,
  placeholder: vocab.components.numberInput.numberValue,
  max: 30,
  min: 22,
};

export const WithoutQuantityCounter = Template.bind({});
WithoutQuantityCounter.args = {
  label: vocab.components.numberInput.number,
  placeholder: vocab.components.numberInput.numberValue,
  withQuantityCounter: false,
};

export const WithError = Template.bind({});
WithError.args = {
  label: vocab.components.numberInput.number,
  placeholder: vocab.components.numberInput.numberValue,
  error: vocab.components.numberInput.errorMessage,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: vocab.components.numberInput.number,
  placeholder: vocab.components.numberInput.numberValue,
  disabled: true,
};

export const WithHint = Template.bind({});
WithHint.args = {
  label: vocab.components.numberInput.number,
  placeholder: vocab.components.numberInput.numberValue,
  hint: vocab.components.numberInput.hint,
};

export const LeftContent = Template.bind({});
LeftContent.args = {
  label: vocab.components.numberInput.number,
  placeholder: vocab.components.numberInput.numberValue,
  leftContent: (
    <Text variant="components1" color="secondary">
      $
    </Text>
  ),
};

export const RightContent = Template.bind({});
RightContent.args = {
  label: vocab.components.numberInput.number,
  placeholder: vocab.components.numberInput.numberValue,
  rightContent: (
    <Text variant="components1" color="secondary">
      {vocab.components.numberInput.aed}
    </Text>
  ),
};
