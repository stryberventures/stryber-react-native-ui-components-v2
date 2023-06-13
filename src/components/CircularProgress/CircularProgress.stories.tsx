import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import CircularProgress from './';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Components/CircularProgress',
  component: CircularProgress,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  parameters: {
    pkg,
    controls: {
      exclude: ['style'],
    },
  },
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = ({...args}) => (
  <CircularProgress {...args} />
);

export const IndeterminateFlat = Template.bind({});
IndeterminateFlat.args = {};

export const IndeterminateRound = Template.bind({});
IndeterminateRound.args = {
  shape: 'round',
};

export const DeterminateFlat = Template.bind({});
DeterminateFlat.args = {
  variant: 'determinate',
  value: 75,
};

export const DeterminateRound = Template.bind({});
DeterminateRound.args = {
  variant: 'determinate',
  shape: 'round',
  value: 75,
};
