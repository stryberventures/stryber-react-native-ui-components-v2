import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import PasswordInput from '.';
import CenterView from '../../storybook/preview/CenterView';

export default {
  title: 'PasswordInput',
  component: PasswordInput,
  decorators: [CenterView],
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = args => (
  <PasswordInput label="Password" placeholder="Enter password" {...args} />
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Hint = Template.bind({});
Hint.args = {
  hint: 'Hint message',
};

export const Error = Template.bind({});
Error.args = {
  error: 'Error message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
