import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import TextArea from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Components/TextArea',
  component: TextArea,
  decorators: Platform.OS === 'web' ? null : [CenterView],
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
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = args => (
  <TextArea {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Your message',
  placeholder: 'Your message',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Your message',
  placeholder: 'Your message',
  color: 'secondary',
};

export const WithValue = Template.bind({});
WithValue.args = {
  label: 'Your message',
  placeholder: 'Your message',
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
