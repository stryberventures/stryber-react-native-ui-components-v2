import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import RadioButton from '.';
import CenterView from '../../storybook/preview/CenterView';
import Form from '../Form';

export default {
  title: 'RadioButton',
  component: RadioButton,
  argTypes: {
    onPress: {action: 'pressed the RadioButton'},
  },
  decorators: [CenterView],
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = args => (
  <Form>
    <RadioButton {...args} value="option 1" placeholder="Option 1" />
    <RadioButton {...args} value="option 2" placeholder="Option 2" />
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  onChange: value => {
    console.log(value);
  },
};

export const Check = Template.bind({});
Check.args = {
  onChange: value => {
    console.log(value);
  },
  variant: 'check',
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
