import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Elevation from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform, View} from 'react-native';
import pkg from './package.json';
import useStoryStyles from './Elevation.styles.stories';
import Divider from '../../storybook/preview/Divider';
import Text from '../Text';
import {vocab} from '../../storybook/preview/i18n';

const Card = () => {
  const storyStyles = useStoryStyles();
  return <View style={[storyStyles.card, storyStyles.borderRadius]} />;
};

export default {
  title: 'Components/Elevation',
  component: Elevation,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
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
        {...args}>
        <Card />
      </Elevation>
      <Divider />
      <Text align="center">{vocab.components.elevation.text}</Text>
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
