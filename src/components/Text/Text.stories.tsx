import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Text from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, View} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Text',
  component: Text,
  decorators:
    Platform.OS === 'web' ? [Story => <View>{Story()}</View>] : [CenterView],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Text>;

const textVariants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'body1',
  'body2',
  'body3',
  'caption1',
  'caption2',
  'components1',
  'components2',
  'components3',
] as const;

const Template: ComponentStory<typeof Text> = args => (
  <>
    <Text align="center" variant="h2" style={{marginBottom: 50}}>
      All text variants:
    </Text>
    {textVariants.map(variant => (
      <Text
        key={variant}
        style={{marginBottom: 10}}
        variant={variant}
        {...args}
      >
        `{variant}` – variant
      </Text>
    ))}
  </>
);

export const AllVariants = Template.bind({});
