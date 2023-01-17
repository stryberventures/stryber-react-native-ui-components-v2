import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Switch from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, StyleSheet} from 'react-native';
import * as Icons from '../Icons';
import {Text, View} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Switch',
  component: Switch,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  argTypes: {
    label: {control: 'text'},
  },
  parameters: {
    pkg,
    controls: {
      exclude: [
        'name',
        'value',
        'clearFormValueOnUnmount',
        'style',
        'checked',
        'pressedStyle',
        'labelStyle',
        'onChange',
        'controlled',
      ],
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => (
  <Switch label="Switch" {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Label',
  hint: 'Hint message',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Small Switch',
  size: 'small',
};

export const Error = Template.bind({});
Error.args = {
  error: 'Error message',
};

export const Hint = Template.bind({});
Hint.args = {
  label: '',
  hint: 'Hint message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const FullWidthReverse = Template.bind({});
FullWidthReverse.args = {
  fullWidth: true,
  reverse: true,
};

const customContentStyle = StyleSheet.create({
  container: {display: 'flex', flexDirection: 'row'},
  text: {color: 'blue', marginRight: 10},
});

export const CustomContent = Template.bind({});
CustomContent.args = {
  label: (
    <View style={customContentStyle.container}>
      <Text style={customContentStyle.text}>Custom content</Text>
      <Icons.EyeIcon />
    </View>
  ),
};

export const CenteredControl = Template.bind({});
CenteredControl.args = {
  label:
    'Very long label very long label very long label very long label very long label very long label very long label',
  hint: 'Hint message',
  controlCentered: true,
};
