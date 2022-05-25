import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Switch from '.';
import CenterView from '../../storybook/preview/CenterView';

export default {
  title: 'Switch',
  component: Switch,
  decorators: [CenterView],
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
