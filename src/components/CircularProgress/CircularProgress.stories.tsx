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

const Template: ComponentStory<typeof CircularProgress> = ({...args}) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (args.variant !== 'determinate') {
      return;
    }
    const timer = setInterval(() => {
      setProgress(prevProgress =>
        prevProgress >= 100 ? 0 : prevProgress + 10,
      );
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <CircularProgress
      {...args}
      value={args.variant === 'determinate' ? progress : args.value}
    />
  );
};

export const IndeterminateFlat = Template.bind({});
IndeterminateFlat.args = {};

export const IndeterminateRound = Template.bind({});
IndeterminateRound.args = {
  shape: 'round',
};

export const DeterminateFlat = Template.bind({});
DeterminateFlat.args = {
  variant: 'determinate',
};

export const DeterminateRound = Template.bind({});
DeterminateRound.args = {
  variant: 'determinate',
  shape: 'round',
};
