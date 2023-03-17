import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import TextArea from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';
import DismissKeyboardDecorator from '../../storybook/preview/DismissKeyboardDecorator';

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
    label: 'Your message',
    placeholder: 'Your message',
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
  value: 'Lorem ipsum',
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
  disabled: true,
};

export const WithLengthIndicator = Template.bind({});
WithLengthIndicator.args = {
  label: 'Max length',
  placeholder: 'Show length indicator',
  maxLength: 200,
  showLength: true,
};
