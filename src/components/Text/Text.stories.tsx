import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Text from '.';
import CenterView from '../../storybook/preview/CenterView';
import pkg from './package.json';

export default {
  title: 'Text',
  component: Text,
  decorators: [CenterView],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Text>;

const textVariants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'buttonLabel',
  'label',
  'labelHighlight',
  'body',
  'description',
  'caption',
  'smallText',
  'footnote',
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
