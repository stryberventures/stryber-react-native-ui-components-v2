import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import Checkbox from '.';
import CenterView from '../../storybook/preview/CenterView';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onPress: {action: 'RadioButton pressed'},
  },
  decorators: [CenterView],
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => (
  <Checkbox {...args} label="Checkbox" />
);

export const Default = Template.bind({});
Default.args = {
  onChange: value => {
    console.log(value);
  },
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
  hint: 'Hint message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
