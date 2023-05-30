import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Checkbox from '.';
import CenterViewDecorator from '../../storybook/preview/CenterViewDecorator';
import {Platform, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import pkg from './package.json';
import {vocab} from '../../storybook/preview/i18n';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  decorators: Platform.OS === 'web' ? null : [CenterViewDecorator],
  argTypes: {
    label: {control: 'text'},
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
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => (
  <Checkbox label={vocab.components.checkbox.label} {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Error = Template.bind({});
Error.args = {
  error: vocab.components.checkbox.error,
};

export const Hint = Template.bind({});
Hint.args = {
  label: '',
  hint: vocab.components.checkbox.hint,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  disabled: true,
  controlled: true,
  checked: true,
};

export const FullWidthReverse = Template.bind({});
FullWidthReverse.args = {
  controlled: true,
  fullWidth: true,
  reverse: true,
};

const customContentStyles = StyleSheet.create({
  wrapper: {display: 'flex', flexDirection: 'row'},
  text: {color: 'blue', marginRight: 10, marginTop: 1.2},
});

export const CustomContent = Template.bind({});
CustomContent.args = {
  label: (
    <View style={customContentStyles.wrapper}>
      <Text style={customContentStyles.text}>
        {vocab.components.checkbox.content}
      </Text>
    </View>
  ),
};
