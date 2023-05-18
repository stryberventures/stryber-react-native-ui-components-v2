import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import CheckboxGroup from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform, View} from 'react-native';
import pkg from './package.json';

const checkboxes = [
  {
    label: 'first child',
    name: 'firstField',
  },
  {
    label: 'second child',
    name: 'secondField',
  },
  {
    label: 'third child',
    name: 'thirdField',
  },
  {
    label: 'fourth child',
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
    label: 'Checkbox Group',
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
  label: 'Checkbox Group',
  checkboxes: checkboxes.map(obj => ({...obj, error: 'Test error'})),
  error: 'Test error',
};
