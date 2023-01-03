import * as React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import Slider from './index';
import CenterView from '../../storybook/preview/CenterView';
import {CheckIconDeprecated, InfoIcon} from '../Icons';
import {Platform, View} from 'react-native';
import pkg from './package.json';
import ControlledSlider from '../../storybook/preview/ControlledSlider';

export default {
  title: 'Slider',
  component: Slider,
  decorators: [
    Platform.OS === 'web' ? Story => Story() : CenterView,
    Platform.OS === 'web'
      ? Story => <View style={{paddingTop: 50}}>{Story()}</View>
      : Story => <Story />,
  ],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = args => <Slider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  max: 10,
  value: 4,
  min: 0,
};

export const Secondary = Template.bind({});
Secondary.args = {
  max: 9,
  value: 3,
  color: 'secondary',
};

export const Input = Template.bind({});
Input.args = {
  max: 9,
  value: 3,
  showTooltip: false,
  showInput: true,
};

export const CustomStep = Template.bind({});
CustomStep.args = {
  max: 10,
  value: 2,
  step: 2,
};

export const StepDotsIndicator = Template.bind({});
StepDotsIndicator.args = {
  max: 10,
  value: 2,
  smooth: false,
  step: 2,
  stepDotsIndicator: true,
};

export const Range = Template.bind({});
Range.args = {
  max: 20,
  value: [2, 10],
};

export const RangeMinDistance = Template.bind({});
RangeMinDistance.args = {
  max: 20,
  value: [1, 5],
  minDistance: 2,
  showInput: true,
  showTooltip: false,
};

export const RangeInput = Template.bind({});
RangeInput.args = {
  max: 20,
  value: [2, 5],
  showTooltip: false,
  showInput: true,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  max: 9,
  value: 3,
  leftLabel: () => <CheckIconDeprecated fill="black" />,
  rightLabel: () => <InfoIcon fill="black" />,
};

export const Controlled = ControlledSlider;

export const Disabled = Template.bind({});
Disabled.args = {
  max: 10,
  value: [2, 5],
  min: 0,
  disabled: true,
};
