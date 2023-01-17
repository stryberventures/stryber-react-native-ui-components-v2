import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import NumberInput from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import pkg from './package.json';

export default {
  title: 'NumberInput',
  component: NumberInput,
  decorators: Platform.OS === 'web' ? null : [CenterView],
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
  <NumberInput {...args} />
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
