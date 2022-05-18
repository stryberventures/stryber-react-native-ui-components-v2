import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import RadioButton from '.';
import CenterView from '../../storybook/preview/CenterView';
import Form from '../Form';

export default {
  title: 'RadioButton',
  component: RadioButton,
  argTypes: {
    onPress: {action: 'RadioButton pressed'},
  },
  decorators: [CenterView],
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = args => (
  <Form>
    <RadioButton {...args} value="option 1" label="Option 1" />
    <RadioButton {...args} value="option 2" label="Option 2" />
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

export const Check = Template.bind({});
Check.args = {
  onChange: value => {
    console.log(value);
  },
  iconVariant: 'check',
};

export const Small = Template.bind({});
Small.args = {
  onChange: value => {
    console.log(value);
  },
  size: 'small',
};

export const Error = Template.bind({});
Error.args = {
  onChange: value => {
    console.log(value);
  },
  error: 'Error message',
};

export const Hint = Template.bind({});
Hint.args = {
  onChange: value => {
    console.log(value);
  },
  hint: 'Hint message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  onChange: value => {
    console.log(value);
  },
  disabled: true,
};
