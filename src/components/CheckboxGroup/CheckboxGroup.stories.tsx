import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import CheckboxGroup from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform, View} from 'react-native';
import pkg from './package.json';
import {vocab} from '../../storybook/preview/i18n';

const checkboxes = [
  {
    label: vocab.components.checkboxGroup.label1,
    name: 'firstField',
  },
  {
    label: vocab.components.checkboxGroup.label2,
    name: 'secondField',
  },
  {
    label: vocab.components.checkboxGroup.label3,
    name: 'thirdField',
  },
  {
    label: vocab.components.checkboxGroup.label4,
    name: 'fourthField',
  },
];

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  argTypes: {
    label: {control: 'text'},
  },
  args: {
    checkboxes,
    label: vocab.components.checkboxGroup.labelGroup,
  },
  parameters: {
    pkg,
    controls: {
      exclude: [
        'name',
        'onChange',
        'clearFormValueOnUnmount',
        'style',
        'pressedStyle',
        'textStyle',
        'labelStyle',
        'controlled',
      ],
    },
  },
} as ComponentMeta<typeof CheckboxGroup>;

const Template: ComponentStory<typeof CheckboxGroup> = ({name: _, ...args}) => {
  return (
    <View>
      <CheckboxGroup name="checkboxGroup" {...args} />
    </View>
  );
};

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Error = Template.bind({});
Error.args = {
  label: vocab.components.checkboxGroup.labelGroup,
  checkboxes: checkboxes.map(obj => ({
    ...obj,
    error: vocab.components.checkboxGroup.error,
  })),
  error: vocab.components.checkboxGroup.error,
};
