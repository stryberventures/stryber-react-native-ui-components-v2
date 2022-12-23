import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Checkbox from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform} from 'react-native';
import {Text, View} from 'react-native';
import * as Icons from '../Icons';
import pkg from './package.json';

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => (
  <Checkbox label="Checkbox" {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Small = Template.bind({});
Small.args = {
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

export const CustomContent = Template.bind({});
CustomContent.args = {
  label: (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Text style={{color: 'blue', marginRight: 10}}>Custom content</Text>
      <Icons.EyeSlashIconDeprecated />
    </View>
  ),
};
