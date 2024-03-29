import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Switch from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform, StyleSheet} from 'react-native';
import * as Icons from '../Icons';
import {Text, View} from 'react-native';
import pkg from './package.json';
import {vocab} from '../../storybook/preview/i18n';

export default {
  title: 'Components/Switch',
  component: Switch,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
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
  <Switch label={vocab.components.switch.switch} {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: vocab.components.switch.label,
  hint: vocab.components.switch.hintMessage,
};

export const Error = Template.bind({});
Error.args = {
  error: vocab.components.switch.errorMessage,
};

export const Hint = Template.bind({});
Hint.args = {
  label: '',
  hint: vocab.components.switch.hintMessage,
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
  text: {color: 'blue', marginRight: 10, marginTop: 3},
});

export const CustomContent = Template.bind({});
CustomContent.args = {
  label: (
    <View style={customContentStyle.container}>
      <Text style={customContentStyle.text}>
        {vocab.components.switch.content}
      </Text>
      <Icons.EyeIcon />
    </View>
  ),
};

export const CenteredControl = Template.bind({});
CenteredControl.args = {
  label: vocab.components.switch.longLabel,
  hint: vocab.components.switch.hintMessage,
  controlCentered: true,
};
