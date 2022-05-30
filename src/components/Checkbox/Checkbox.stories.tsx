import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Checkbox from '.';
import CenterView from '../../storybook/preview/CenterView';

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [CenterView],
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
