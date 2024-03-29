import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Text from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform, View} from 'react-native';
import pkg from './package.json';
import useStyles from './Text.styles.stories';
import {vocab} from '../../storybook/preview/i18n';

export default {
  title: 'Components/Text',
  component: Text,
  decorators:
    Platform.OS === 'web'
      ? [Story => <View>{Story()}</View>]
      : [CenterViewDecorator],
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
  'buttonLabelMini',
  'buttonLabelLarge',
] as const;

const Template: ComponentStory<typeof Text> = args => {
  const styles = useStyles();
  return (
    <>
      <Text align="center" variant="h2" style={styles.title}>
        {vocab.components.text.allTextVariants}
      </Text>
      {textVariants.map(variant => (
        <Text key={variant} style={styles.text} variant={variant} {...args}>
          `{variant}` – variant
        </Text>
      ))}
    </>
  );
};

export const AllVariants = Template.bind({});
