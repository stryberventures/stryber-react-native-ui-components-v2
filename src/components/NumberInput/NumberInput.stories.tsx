import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import NumberInput from '.';
import CenterView from '../../storybook/preview/CenterView';

export default {
  title: 'NumberInput',
  component: NumberInput,
  decorators: [CenterView],
} as ComponentMeta<typeof NumberInput>;

const Template: ComponentStory<typeof NumberInput> = args => (
  <NumberInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Number',
  placeholder: 'Number Value',
  step: 1,
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
