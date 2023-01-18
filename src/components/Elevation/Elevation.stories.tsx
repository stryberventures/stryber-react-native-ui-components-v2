import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Elevation from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, View} from 'react-native';
import pkg from './package.json';
import useStoryStyles from './Elevation.styles.stories';
import Divider from '../../storybook/preview/Divider';
import Text from '../Text';

const Card = () => {
  const storyStyles = useStoryStyles();
  return <View style={[storyStyles.card, storyStyles.borderRadius]} />;
};

export default {
  title: 'Elevation',
  component: Elevation,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
    controls: {
      exclude: ['childShadowStyle', 'testID'],
    },
  },
} as ComponentMeta<typeof Elevation>;

const Template: ComponentStory<typeof Elevation> = args => {
  const storyStyles = useStoryStyles();
  return (
    <View style={storyStyles.centeredContainer}>
      <Elevation
        style={storyStyles.borderRadius}
        childShadowStyle={storyStyles.borderRadius}
        {...args}
      >
        <Card />
      </Elevation>
      <Divider />
      <Text align="center">
        Note: This component uses 2 wrappers to create multiple shadows. See
        source code of the story how `storyStyles.borderRadius` used
      </Text>
    </View>
  );
};

export const ExtraLight = Template.bind({});
ExtraLight.args = {
  variant: 'extraLight',
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'medium',
};

export const Heavy = Template.bind({});
Heavy.args = {
  variant: 'heavy',
};

export const ExtraHeavy = Template.bind({});
ExtraHeavy.args = {
  variant: 'extraHeavy',
};
