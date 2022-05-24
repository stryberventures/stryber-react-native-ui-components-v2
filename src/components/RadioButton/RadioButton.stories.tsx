import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react-native';
import RadioButton from '.';
import CenterView from '../../storybook/preview/CenterView';
import Form from '../Form';

export default {
  title: 'RadioButton',
  component: RadioButton,
  decorators: [CenterView],
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = args => (
  <Form>
    <RadioButton label="Option 1" {...args} value="option 1" />
    <RadioButton label="Option 2" {...args} value="option 2" />
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

export const Small = Template.bind({});
Small.args = {
  onChange: value => {
    console.log(value);
  },
  size: 'small',
};

export const Hint = Template.bind({});
Hint.args = {
  onChange: value => {
    console.log(value);
  },
  label: '',
  hint: 'Hint message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  onChange: value => {
    console.log(value);
  },
  disabled: true,
};
