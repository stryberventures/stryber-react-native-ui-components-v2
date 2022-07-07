import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Switch from '.';
import CenterView from '../../storybook/preview/CenterView';
import * as Icons from '../Icons';
import {Text, View} from 'react-native';
import pkg from './package.json';

export default {
  title: 'Switch',
  component: Switch,
  decorators: [CenterView],
  parameters: {
    pkg,
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => (
  <Switch label="Switch" {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
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

export const CustomContent = Template.bind({});
CustomContent.args = {
  label: '',
  children: (
    <View style={{display: 'flex', flexDirection: 'row'}}>
      <Text style={{color: 'blue', marginRight: 10}}>Custom content</Text>
      <Icons.EyeSlashIcon />
    </View>
  ),
};
