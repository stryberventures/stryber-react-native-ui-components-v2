import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import RadioButton from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, StyleSheet} from 'react-native';
import Form from '../Form';
import {Text, View} from 'react-native';
import * as Icons from '../Icons';
import pkg from './package.json';
import Divider from '../../storybook/preview/Divider';

export default {
  title: 'RadioButton',
  component: RadioButton,
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
      ],
    },
  },
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = args => (
  <Form>
    <RadioButton label="Option 1" {...args} value="option 1" />
    <Divider />
    <RadioButton label="Option 2" {...args} value="option 2" />
  </Form>
);

export const Primary = Template.bind({});
Primary.args = {
  onChange: value => {
    console.log(value);
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  onChange: value => {
    console.log(value);
  },
  color: 'secondary',
};

export const Error = Template.bind({});
Error.args = {
  onChange: value => {
    console.log(value);
  },
  error: 'Test error',
};

export const Hint = Template.bind({});
Hint.args = {
  onChange: value => {
    console.log(value);
  },
  label: '',
  hint: 'Hint message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  onChange: value => {
    console.log(value);
  },
  disabled: true,
};

export const FullWidthReverse = Template.bind({});
FullWidthReverse.args = {
  onChange: value => {
    console.log(value);
  },
  fullWidth: true,
  reverse: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  onChange: value => {
    console.log(value);
  },
  disabled: true,
  checked: true,
};

const customContentStyles = StyleSheet.create({
  container: {display: 'flex', flexDirection: 'row'},
  text: {color: 'blue', marginRight: 10, marginTop: 1.2},
});

export const CustomContent = Template.bind({});
CustomContent.args = {
  label: (
    <View style={customContentStyles.container}>
      <Text style={customContentStyles.text}>Custom content</Text>
      <Icons.EyeSlashIconDeprecated />
    </View>
  ),
};
