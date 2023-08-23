import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import TextArea from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';
import DismissKeyboardDecorator from '../../storybook/preview/DismissKeyboardDecorator';
import {vocab} from '../../storybook/preview/i18n';

export default {
  title: 'Components/TextArea/LabelOutside',
  component: TextArea,
  decorators:
    Platform.OS === 'web'
      ? null
      : [CenterViewDecorator, DismissKeyboardDecorator],
  argTypes: {
    error: {control: 'text'},
  },
  args: {
    label: vocab.components.textArea.yourMessage,
    placeholder: vocab.components.textArea.yourMessage,
    color: 'primary',
  },
  parameters: {
    pkg,
    controls: {
      exclude: [
        'name',
        'clearFormValueOnUnmount',
        'mask',
        'leftContent',
        'onRemove',
        'withRemoveButton',
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
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = args => (
  <TextArea variant="labelOutside" {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: vocab.components.textArea.loremIpsum,
};

export const Hint = Template.bind({});
Hint.args = {
  label: vocab.components.textArea.hint,
  placeholder: vocab.components.textArea.hint,
  hint: vocab.components.textArea.hintMessage,
};

export const Error = Template.bind({});
Error.args = {
  label: vocab.components.textArea.error,
  placeholder: vocab.components.textArea.error,
  error: vocab.components.textArea.errorMessage,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: vocab.components.textArea.disabled,
  placeholder: vocab.components.textArea.disabled,
  disabled: true,
};

export const WithLengthIndicator = Template.bind({});
WithLengthIndicator.args = {
  label: vocab.components.textArea.maxLength,
  placeholder: vocab.components.textArea.showLengthIndicator,
  maxLength: 200,
  showLength: true,
};
